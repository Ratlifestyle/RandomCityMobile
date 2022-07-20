import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as React from 'react';
import * as App from '../App';

function SignUpScreen() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPass, setConfirmPass] = React.useState('');
    const [validPass, setValidPass] = React.useState(true);
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [mail, setMail] = React.useState('');
    const [pseudo, setPseudo] = React.useState('');
    const { signUp } = React.useContext(App.AuthContext);

    return (
      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
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
          onChangeText={setPseudo}
        />
        <Button title="Sign up" onPress={() => signUp({ username, password, confirmPass, firstName, lastName, mail, pseudo, setValidPass })} />
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