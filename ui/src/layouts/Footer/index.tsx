import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from 'components'

import './footer.scss'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer--grid">
          <NavLink data-testid="logo-link" to="/" aria-label="home page">
            <Logo />
          </NavLink>
          <nav>
            <NavLink to="/about" aria-label="About page">
              About
            </NavLink>
            <NavLink to="/qr-menus" aria-label="QR menus page">
              QR Menus
            </NavLink>
            <NavLink to="/services" aria-label="Services page">
              Services
            </NavLink>
            <NavLink to="/contact" aria-label="Contact page">
              Contact Us
            </NavLink>
          </nav>
          <button className="cta cta--white-ghost cta--small">Sign Up</button>
          <button className="cta cta--white-ghost cta--small">Sign In</button>
        </div>
      </div>
      <div className="footer--bottom flex">
        <div>&copy; {new Date().getFullYear()} Pure Func LLC</div>
        <a href="mailto:contact@purefunc.io">Email: contact@purefunc.io</a>
      </div>
    </footer>
  )
}
