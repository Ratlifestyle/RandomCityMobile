import { View, Text, Button, StyleSheet } from "react-native";
import * as App from "../App";
import * as React from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

function GameStart({ navigation }) {
    const [gameState, setGameState] = React.useState("");
    const [markerLeftState, setMarkerLeftState] = React.useState(30);
    const [markerRightState, setMarkerRightState] = React.useState(50);

    switch (gameState) {
        case "":
            return (
                <View>
                    <Text>Demarrer :)</Text>
                    <Button
                        title="Demarrer"
                        onPress={() => {
                            setGameState("initialisation");
                        }}
                    />
                </View>
            );
        case "initialisation":
            return (
                <View style={styles.container}>
                    <Text>initialisation :)</Text>
                    <MultiSlider
                        values={[markerLeftState, markerRightState]}
                        min={10}
                        max={200}
                        isMarkersSeparated={true}
                        minMarkerOverlapStepDistance={5}
                        step={5}
                        onValuesChange={(value) => {
                            setMarkerLeftState(value[0]);
                            setMarkerRightState(value[1]);
                        }}
                    ></MultiSlider>
                    <Text>
                        distance minimum : {markerLeftState} distance maximum :{" "}
                        {markerRightState}
                    </Text>
                    <Button
                        title="Demarrer"
                        onPress={() => {
                            setGameState("confirmingCity");
                        }}
                    />
                </View>
            );
        case "confirmingCity":
            return (
                <View style={styles.container}>
                    <Text>Choix de la ville</Text>
                    <Text>Ville a recuperer de la requete</Text>
                    <View>
                        <Button
                            title="Demarrer"
                            onPress={() => {
                                setGameState("inGame");
                            }}
                        />
                        <Button
                            title="changeCity"
                            onPress={() => {
                                // Fetch change city
                            }}
                        ></Button>
                    </View>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default GameStart;
