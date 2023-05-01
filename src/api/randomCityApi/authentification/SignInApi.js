import { URLAPI } from '../../../global/constants'

export async function signIn (data) {
  return fetch(URLAPI + '/user/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      mail: data.mail,
      password: data.password
    })
  }).then(async (response) => {
    return response.json().then((data) => {
      return data
    })
  })
}
