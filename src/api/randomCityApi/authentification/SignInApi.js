import { URLAPI } from "../../../global/constants";

export async function signIn(data) {
    return fetch(URLAPI + "/user/login", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            login: data.login,
            password: data.password,
        }),
    });
}
