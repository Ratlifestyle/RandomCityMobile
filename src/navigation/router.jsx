import { useAuth } from '../contexts/AuthContext'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'
import SignInScreen from '../components/SignInScreen'
import SignUpScreen from '../components/SignUpScreen'
import History from '../components/History'
import Success from '../components/Success'
import Options from '../components/Options'
import GameStart from '../components/GameStart'

const Router = () => {
  const { state: { isLoggedIn } } = useAuth()
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      {!isLoggedIn
        ? (
          <Stack.Navigator>
            <Stack.Screen name='SignIn' component={SignInScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
          </Stack.Navigator>
          )
        : (
          <Tab.Navigator>
            <Tab.Screen name='GameStart' component={GameStart} />
            <Tab.Screen name='History' component={History} />
            <Tab.Screen name='Success' component={Success} />
            <Tab.Screen name='Options' component={Options} />
          </Tab.Navigator>
          )}
    </NavigationContainer>

  )
}

export default Router
