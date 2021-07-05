import React, { createContext, useReducer, useContext, FC } from 'react'

type InitialStateType = {
  displayName: string
  username: string
  isLoggedIn: boolean
  isAdmin: boolean
  email: string
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export enum Types {
  Login = 'LOGIN',
  Logoff = 'LOGOFF',
}

type AuthPayLoad = {
  [Types.Login]: {
    displayName: string
    username: string
    isAdmin: boolean
  }
  [Types.Logoff]: {}
}

export type AuthActions = ActionMap<AuthPayLoad>[keyof ActionMap<AuthPayLoad>]

export const initialAuthValues = {
  displayName: '',
  username: '',
  isLoggedIn: false,
  isAdmin: false,
  email: '',
}

export const AuthContext = createContext<{
  state: InitialStateType
  dispatch: React.Dispatch<AuthActions>
}>({ state: initialAuthValues, dispatch: () => null })

const reducer = (state: InitialStateType, action: AuthActions) => {
  switch (action.type) {
    case Types.Login:
      return {
        displayName: action.payload.displayName,
        username: action.payload.username,
        isLoggedIn: true,
        isAdmin: action.payload.isAdmin,
      }
    case 'LOGOFF':
      return initialAuthValues
    default:
      return state
  }
}

export const AuthProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthValues)

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
