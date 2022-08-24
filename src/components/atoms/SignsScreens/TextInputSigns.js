import { TextInput } from "react-native";
import { styles } from "../../../styles/SignUpScreenStyles";

function TextInputSignUp(props) {
    return (
        <TextInput
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            style={[styles.textInput, props.style]}
            secureTextEntry={props.secureTextEntry}
        ></TextInput>
    );
}

export default TextInputSignUp;
