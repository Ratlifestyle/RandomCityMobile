import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as React from 'react';
import * as App from '../App';

function SignInScreen({ navigation }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

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
        <Button title="Sign up" onPress={() => navigation.navigate('SignUp')}/>
      </View>
    );
  }

export default SignInScreen;