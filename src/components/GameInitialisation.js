import { View, Text, Button } from "react-native";
import * as App from "../App";


function GameInitialisation({ navigation }) {

    const { initialisation } = React.useContext(App.GameContext)

    return (
        <View>
            <Text>initialisation :)</Text>
        </View>
    );
}

export default GameInitialisation;
