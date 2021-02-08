import React from 'react'
// import { useAuth, Types } from 'global'
import { NavLink, Link } from 'react-router-dom'
// import Cookies from 'js-cookie'
// import { Login } from '../Login/Login'

export const Nav = () => {
  // const { state: authState, dispatch: authDispatch } = useAuth()

  // const logoff = (e) => {
  //   e.preventDefault()
  //   Cookies.remove('token')
  //   authDispatch({ type: Types.Logoff, payload: {} })
  // }

  return (
    <nav>
      <NavLink className="nav-link" to="/about" aria-label="about page">
        About
      </NavLink>
      <NavLink className="nav-link" to="/services" aria-label="services page">
        Services
      </NavLink>
      <NavLink className="nav-link" to="/qr-menus" aria-label="QR menus page">
        QR Menus
      </NavLink>
      {/* {!authState.isLoggedIn && <Login />}
      {authState.isLoggedIn && (
        <>
          <button className="cta cta--cancel cta--small" onClick={logoff}>
            Logoff
          </button>
        </>
      )} */}
      <Link className="cta cta--white cta--small" to="/contact">
        Countact Us
      </Link>
      <button className="cta cta--white-ghost cta--small">Sign Up</button>
    </nav>
  )
}
