import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import * as React from "react";
import * as App from "../App";
import { URLAPI } from "../global/constants";
import { styles } from "../styles/SignUpScreenStyles";
import TextInputSignUp from "./atoms/SignUpScreen/TextInputSignUp";
import { checkIfValidPseudo } from "../api/randomCityApi/authentification/SignUpApi";

function SignUpScreen() {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPass, setConfirmPass] = React.useState("");
  const [validPass, setValidPass] = React.useState(true);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [pseudo, setPseudo] = React.useState("");
  const [validPseudo, setValidPseudo] = React.useState(true);

  const { signUp } = React.useContext(App.AuthContext);

  return (
    <View style={styles.formView}>
      <TextInputSignUp
        placeholder="login"
        value={login}
        onChangeText={setLogin}
      />
      <TextInputSignUp
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={!validPass ? styles.invalidInput : null}
      />
      <TextInputSignUp
        placeholder="Confirm password"
        value={confirmPass}
        onChangeText={setConfirmPass}
        secureTextEntry
      />
      <TextInputSignUp
        placeholder="First name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInputSignUp
        placeholder="Last name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInputSignUp placeholder="Mail" value={mail} onChangeText={setMail} />
      <View>
        <TextInputSignUp
          placeholder="Pseudo"
          value={pseudo}
          onChangeText={(pseudo) => {
            setPseudo(pseudo);
            checkIfValidPseudo(pseudo).then((valid)=>{setValidPseudo(valid)})
          }}
          style={!validPseudo ? styles.invalidInput : null}
        />
        {!validPseudo ? <Text>pseudo déja existant</Text> : null}
      </View>
      <Button
        title="Sign up"
        onPress={() =>
          signUp({
            login,
            password,
            confirmPass,
            firstName,
            lastName,
            mail,
            pseudo,
            setValidPass,
          })
        }
      />
    </View>
  );
}

export default SignUpScreen;
