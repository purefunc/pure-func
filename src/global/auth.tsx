import React, { createContext, useReducer } from "react"

type InitialStateType = {
  displayName: string,
  username: string,
  isLoggedIn: boolean,
  isAdmin: boolean,
}

type ActionMap<M extends { [index: string]: any}> = {
  [Key in keyof M]: M[Key] extends undefined
  ? {
    type: Key;
  }
  : {
    type: Key;
    payload: M[Key];
  }
};

export enum Types {
  Login = 'LOGIN',
  Logoff = 'LOGOFF',
}

type AuthPayLoad = {
  [Types.Login] : {
    displayName: string;
    username: string;
    isAdmin: boolean;
  };
  [Types.Logoff]: {

  }
}

export type AuthActions = ActionMap<AuthPayLoad>[keyof ActionMap<AuthPayLoad>];

const initialState = {
  displayName: '',
  username: '',
  isLoggedIn: false,
  isAdmin: false,
}

const AuthContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<AuthActions>;}>({state: initialState, dispatch: () => null})

const reducer = (state: InitialStateType, action: AuthActions) => {
  switch (action.type) {
    case Types.Login:
      return {
        displayName: action.payload.displayName,
        username: action.payload.username,
        isLoggedIn: true,
        isAdmin: action.payload.isAdmin,
      }
    case "LOGOFF":
      return initialState
    default:
      return state
  }
}

const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

const AuthConsumer = AuthContext.Consumer

export { AuthContext, AuthProvider, AuthConsumer }
