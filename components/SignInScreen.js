import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as React from 'react';
import * as App from '../App';

function SignInScreen() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    console.log(App.AuthContext )
    const { signIn } = React.useContext(App.AuthContext);

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
        />
        <Button title="Sign in" onPress={() => signIn({ username, password })} />
      </View>
    );
  }

export default SignInScreen;