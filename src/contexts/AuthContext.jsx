import { createContext, useContext, useEffect, useReducer } from 'react'
import { signIn } from '../api/randomCityApi/authentification/SignInApi'
import { DeleteValueFor, GetValueFor, Save } from '../Storage'
import jwt_decode from 'jwt-decode'

const AuthContext = createContext()

const actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  RESET: 'RESET'
}

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
  error: null,
  loading: false
}

const AuthReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...initialState, isLoggedIn: true, user: action.data.user, token: action.data.token
      }
    case actionTypes.LOGIN_FAILURE:
      return {
        ...initialState, error: action.data.error
      }
    case actionTypes.LOGOUT:
      return initialState
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const AuthContextFactory = (dispatch) => ({
  login: async (credentials) => {
    try {
      const result = signIn(credentials).then((result) => {
        if (result && result.auth_token && result.user) {
          dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            data: { user: result.user, token: result.jwt }
          })
        }
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        data: { error }
      })
    }
  },
  logout: () => {
    DeleteValueFor('AUTH').then(() => dispatch({ type: actionTypes.LOGOUT }))
  }
})

const AuthProvider = ({ children }) => {
  useEffect(() => {
    const fetchSavedState = async () => {
      try {
        const savedState = await GetValueFor('AUTH')
        const _initialState = savedState ? JSON.parse(savedState) : initialState
      } catch (error) {
        console.log(error)
      }
    }
    fetchSavedState()
  }, [])

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  useEffect(() => {
    const saveState = async () => {
      try {
        await Save('AUTH', JSON.stringify(state))
      } catch (error) {
        console.log(error)
      }
    }
    saveState()
  }, [state])

  const contextValue = { state, ...AuthContextFactory(dispatch) }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside a AuthProvider')
  return context
}

export {
  AuthProvider,
  useAuth
}
