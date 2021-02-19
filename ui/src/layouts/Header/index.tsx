import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from 'components'
import { Nav } from './Nav'
import { Link } from 'react-router-dom'
import './header.scss'

export function Header() {
  return (
    <header className="header flex">
      <div className="header__inner flex wrapper">
        <h1 className="margin-0 logo">
          <NavLink data-testid="logo-link" to="/" aria-label="home page">
            <Logo />
          </NavLink>
        </h1>
        <nav>
          <NavLink className="nav-link" to="/about" aria-label="About page">
            About
          </NavLink>
          <NavLink className="nav-link" to="/services" aria-label="Services page">
            Services
          </NavLink>
          <NavLink className="nav-link" to="/menus" aria-label="Digital Menus page">
            Digital Menus
          </NavLink>
          {/* {!authState.isLoggedIn && <Login />}
      {authState.isLoggedIn && (
        <>
        <button className="cta cta--cancel cta--small" onClick={logoff}>
        Logoff
        </button>
        </>
      )} */}
        </nav>
      </div>
      <div>
        <Link className="cta cta--white cta--small" to="/contact">
          Contact Us
        </Link>
        <button className="cta cta--white-ghost cta--small">Sign Up</button>
      </div>
    </header>
  )
}
