import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import * as React from 'react'
import * as App from '../../App'
import { styles } from '../styles/SignInScreenStyles'
import TextInputSigns from './atoms/SignsScreens/TextInputSigns'
import { Form, Formik } from 'formik'
import { useAuth } from '../contexts/AuthContext'

function SignInScreen ({ navigation }) {
  const [mail, setMail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const { login } = useAuth()

  const handleSubmit = (values) => {
    login(values)
  }

  return (
    <Formik
      initialValues={
      {
        email: '',
        password: ''
      }
    }
      handleSubmit={handleSubmit}
    >
      <Form>
        <TextInputSigns
          placeholder='email'
          value={mail}
          onChangeText={setMail}
          name='email'
        />
        <TextInputSigns
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          name='password'
        />
        <Button type='submit' />
      </Form>
    </Formik>
  )
}

export default SignInScreen
