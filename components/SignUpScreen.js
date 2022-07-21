import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as React from 'react';
import * as App from '../App';
import { URLAPI } from '../global/constants';

function SignUpScreen() {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPass, setConfirmPass] = React.useState('');
    const [validPass, setValidPass] = React.useState(true);
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [pseudo, setPseudo] = React.useState('');
    const { signUp } = React.useContext(App.AuthContext);

    const checkIfValidPseudo = (pseudo) => {
      console.log(pseudo)
      const url = URLAPI + '/user/validPseudo/'+pseudo
      console.log(url)
      fetch(url,{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      }).then(result=>{
          console.log("aaa")
          result.json().then(data=>{console.log(data)})
      })
    }

    return (
      <View>
        <TextInput
          placeholder="login"
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={!validPass ? styles.wrongPass : null }
        />
        <TextInput
          placeholder="Confirm password"
          value={confirmPass}
          onChangeText={setConfirmPass}
          secureTextEntry
        />
        <TextInput
          placeholder="First name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          placeholder="Last name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          placeholder="Mail"
          value={mail}
          onChangeText={setMail}
        />
        <TextInput
          placeholder="Pseudo"
          value={pseudo}
          onChangeText={(pseudo)=>{
            setPseudo(pseudo)
            checkIfValidPseudo(pseudo)
          }}
        />
        <Button title="Sign up" onPress={() => signUp({ login, password, confirmPass, firstName, lastName, mail, pseudo, setValidPass })} />
      </View>
    );
  }

const styles = StyleSheet.create({
  wrongPass: {
    shadowColor: 'rgb(255, 0, 0) 3px 0px 3px',
    shadowRadius: '3px'
  }
})
  

export default SignUpScreen;