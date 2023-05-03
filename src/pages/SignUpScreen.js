import { Text, View, Button } from 'react-native'
import * as React from 'react'
import { styles } from '../styles/SignUpScreenStyles'
import RCTextInput from '../components/Global/Inputs/RCTextInput'
import { checkIfValidPseudo } from '../api/randomCityApi/authentification/SignUpApi'

function SignUpScreen () {
  const [mail, setMail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPass, setConfirmPass] = React.useState('')
  const [validPass] = React.useState(true)
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [pseudo, setPseudo] = React.useState('')
  const [validPseudo, setValidPseudo] = React.useState(true)

  return (
    <View style={styles.formView}>
      <RCTextInput
        placeholder='Mail'
        value={mail}
        onChangeText={setMail}
      />
      <RCTextInput
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={!validPass ? styles.invalidInput : null}
      />
      <RCTextInput
        placeholder='Confirm password'
        value={confirmPass}
        onChangeText={setConfirmPass}
        secureTextEntry
      />
      <RCTextInput
        placeholder='First name'
        value={firstName}
        onChangeText={setFirstName}
      />
      <RCTextInput
        placeholder='Last name'
        value={lastName}
        onChangeText={setLastName}
      />

      <View>
        <RCTextInput
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
