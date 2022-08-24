import * as App from "../../../App";
import { getLocation } from "../../../GeoLocation";
import { URLAPI } from "../../../global/constants";
import { GetValueFor } from "../../../Storage";

export async function startGameSession(distanceMin, distanceMax) {

    let userToken = GetValueFor('userToken');

    let location = await getLocation()
    console.log(location)

    return fetch(URLAPI + "/game_session/start?latitude="+location.latitude+'&longitude='+location.longitude+'&distanceMin='+distanceMin+'&distanceMax='+distanceMax, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            'Authorization': userToken,
        },
    }).then(async (response) => {
        return response.json().then((data) => {
            return data;
        });
    });
}
