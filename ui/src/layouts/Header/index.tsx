import React from 'react'
import { Logo } from 'components'
import { NavLink, Link } from 'react-router-dom'
import './header.scss'

export function Header() {
  return (
    <header className="header flex">
      <div className="header__inner wrapper">
        <h1 className="margin-0 logo">
          <NavLink data-testid="logo-link" to="/" aria-label="home page">
            <Logo />
          </NavLink>
        </h1>
        <nav className="flex">
          <div>
            <NavLink className="nav-link" to="/about" aria-label="About page">
              About
            </NavLink>
            <NavLink className="nav-link" to="/services" aria-label="Services page">
              Services
            </NavLink>
            <NavLink className="nav-link" to="/menus" aria-label="Digital Menus page">
              Digital Menus
            </NavLink>
          </div>
          {/* {!authState.isLoggedIn && <Login />}
      {authState.isLoggedIn && (
        <>
        <button className="cta cta--cancel cta--small" onClick={logoff}>
        Logoff
        </button>
        </>
      )} */}
          <div>
            <Link className="cta cta--white cta--small" to="/contact">
              Contact Us
            </Link>
            <button className="cta cta--white-ghost cta--small">Sign Up</button>
          </div>
        </nav>
      </div>
    </header>
  )
}
