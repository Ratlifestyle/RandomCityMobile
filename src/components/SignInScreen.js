import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as React from 'react';
import * as App from '../App';
import { styles } from '../styles/SignInScreenStyles';
import TextInputSigns from "./atoms/SignsScreens/TextInputSigns";

function SignInScreen({ navigation }) {
    const [mail, setMail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { signIn } = React.useContext(App.AuthContext);

    return (
      <View style={styles.formView}>
        <TextInputSigns
          placeholder="mail"
          value={mail}
          onChangeText={setMail}
        />
        <TextInputSigns
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign in" onPress={() => signIn({ mail, password })} />
        <Button title="Sign up" onPress={() => navigation.navigate('SignUp')}/>
      </View>
    );
  }

export default SignInScreen;