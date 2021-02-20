import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import { Logo } from 'components'

import './footer.scss'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer--nav container grid grid--cols-4">
          <div className="footer--logo">
            <NavLink data-testid="logo-link" to="/" aria-label="home page">
              <Logo />
            </NavLink>
          </div>
          <div>
            <NavLink className="text-white" to="/about" aria-label="About page">
              About
            </NavLink>
            <NavLink className="text-white" to="/menus" aria-label="Digital Menus">
              Digital Menus
            </NavLink>
            </div>
            <div>
              <NavLink className="text-white" to="/services" aria-label="Services page">
                Services
              </NavLink>
              <NavLink className="text-white" to="/contact" aria-label="Contact page">
                Contact Us
              </NavLink>
            </div>
            <div>
                <button className="cta cta--white-ghost">Join</button>
                <button className="cta cta--white-ghost">Sign In</button>
            </div>
          </div>
      </div>
      <div className="flex footer--bottom wrapper">
        <div>&copy; {new Date().getFullYear()} Pure Func LLC</div>
        <div>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <a href="mailto:contact@purefunc.io">Email: contact@purefunc.io</a>
      </div>
    </footer>
  )
}
