import { Button, View, Text } from 'react-native'
import { useEffect } from 'react'
import * as React from 'react'
import { styles } from '../styles/SignInScreenStyles'
import RCTextInput from '../components/Global/Inputs/RCTextInput'
import { Formik } from 'formik'
import { useAuth } from '../contexts/AuthContext'
import * as yup from 'yup'

function SignInScreen ({ navigation }) {
  const { login, state: { isLoggedIn } } = useAuth()

  const loginValidationSchema = yup.object().shape({
    email: yup.string().email('Please enter valid email').required('Email Address is required'),
    password: yup.string().min(5, ({ min }) => `Password must be at least ${min} characters`).required('Password is required')
  })

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate('GameStart')
    }
  }, [isLoggedIn])

  const handleSubmit = (values) => {
    login(values)
  }

  const handleRedirectSubscription = () => {
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.formView}>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={
      {
        email: 'test@mail',
        password: 'password'
      }
    }
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <RCTextInput
              placeholder='email'
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              name='email'
              keyboardType='email-address'
            />
            {errors.email &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>}
            <RCTextInput
              placeholder='password'
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              name='password'
            />
            {errors.password &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>}
            <Button type='submit' title='Connexion' onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button title='Inscription' onPress={handleRedirectSubscription} />
    </View>
  )
}

export default SignInScreen
