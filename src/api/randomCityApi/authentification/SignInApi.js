import { URLAPI } from "../../../global/constants";

export async function signIn(data) {
  console.log(URLAPI);
  return fetch(URLAPI + "/user/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'false',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Origin, OPTIONS, X-Requested-With, Content-Type, Accept',
      "Content-type": "application/json",
      
    },
    body: JSON.stringify({
      mail: data.mail,
      password: data.password,
    }),
  }).then(async (response) => {
    return response.json().then((data) => {
      return data;
    });
  });
}
