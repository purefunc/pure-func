import React, { useContext, useRef } from "react"
import { AuthContext, Types } from "../../global/auth"
import { NavLink } from "react-router-dom"
import { Login } from "../login/Login"
import Cookies from "js-cookie"

export const Nav = () => {
  const { state: authState, dispatch: authDispatch } = useContext(AuthContext)

  const logoff = e => {
    e.preventDefault()
    Cookies.remove("token")
    authDispatch({ type: Types.Logoff, payload: {} })
  }

  return (
    <nav>
      <ul>
        {!authState.isLoggedIn && <Login />}
        {authState.isLoggedIn && (
          <>
            <li onClick={logoff}>Logoff</li>
          </>
        )}
      </ul>
    </nav>
  )
}
