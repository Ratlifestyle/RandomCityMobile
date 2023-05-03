import * as React from 'react'
import { AuthProvider } from './src/contexts/AuthContext'
import Router from './src/navigation/router'

export default function App () {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}
