import React from 'react'
import { useAuth, Types } from 'global'
import { NavLink } from 'react-router-dom'
import Cookies from 'js-cookie'
import { Login } from '../Login/Login'

export const Nav = () => {
  const { state: authState, dispatch: authDispatch } = useAuth()

  const logoff = (e) => {
    e.preventDefault()
    Cookies.remove('token')
    authDispatch({ type: Types.Logoff, payload: {} })
  }

  return (
    <nav>
      <NavLink to="/about" aria-label="about page">
        About
      </NavLink>
      <NavLink to="/qr-menus" aria-label="QR menus page">
        QR Menus
      </NavLink>
      {!authState.isLoggedIn && <Login />}
      {authState.isLoggedIn && (
        <>
          <button className="cta cta--cancel cta--small" onClick={logoff}>
            Logoff
          </button>
        </>
      )}
    </nav>
  )
}
