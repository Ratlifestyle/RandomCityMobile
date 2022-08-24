import * as App from "../../../App";
import { URLAPI } from "../../../global/constants";

export async function startGameSession(data) {


    

    return fetch(URLAPI + "game_session/start", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
    }).then(async (response) => {
        return response.json().then((data) => {
            return data;
        });
    });
}
