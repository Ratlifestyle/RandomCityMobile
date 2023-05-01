import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import * as React from 'react'
import * as App from '../../App'
import { URLAPI } from '../global/constants'
import { styles } from '../styles/SignUpScreenStyles'
import TextInputSigns from './atoms/SignsScreens/TextInputSigns'
import { checkIfValidPseudo } from '../api/randomCityApi/authentification/SignUpApi'

function SignUpScreen () {
  const [mail, setMail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPass, setConfirmPass] = React.useState('')
  const [validPass, setValidPass] = React.useState(true)
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [pseudo, setPseudo] = React.useState('')
  const [validPseudo, setValidPseudo] = React.useState(true)

  return (
    <View style={styles.formView}>
      <TextInputSigns
        placeholder='Mail'
        value={mail}
        onChangeText={setMail}
      />
      <TextInputSigns
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={!validPass ? styles.invalidInput : null}
      />
      <TextInputSigns
        placeholder='Confirm password'
        value={confirmPass}
        onChangeText={setConfirmPass}
        secureTextEntry
      />
      <TextInputSigns
        placeholder='First name'
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInputSigns
        placeholder='Last name'
        value={lastName}
        onChangeText={setLastName}
      />

      <View>
        <TextInputSigns
          placeholder='Pseudo'
          value={pseudo}
          onChangeText={(pseudo) => {
            setPseudo(pseudo)
            checkIfValidPseudo(pseudo).then((valid) => {
              setValidPseudo(valid)
            })
          }}
          style={!validPseudo ? styles.invalidInput : null}
        />
        {!validPseudo ? <Text>pseudo déja existant</Text> : null}
      </View>
      <Button
        title='Sign up'
      />
    </View>
  )
}

export default SignUpScreen
