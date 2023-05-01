import { URLAPI } from '../../../global/constants'

export async function checkIfValidPseudo (pseudo) {
  const url = URLAPI + '/user/validPseudo/' + pseudo
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(async (response) => {
    return response.json().then((data) => {
      return data.result
    })
  })
}

export async function SignUp (data) {
  return fetch(URLAPI + '/user/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      mail: data.mail,
      password: data.password,
      first_name: data.firstName,
      last_name: data.lastName,
      pseudo: data.pseudo
    })
  }).then(async (response) => {
    return response.json().then((data) => {
      return data
    })
  })
}
