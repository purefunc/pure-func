import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from 'components'

import './footer.scss'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer footer--grid">
          <div className="logo">
          <NavLink data-testid="logo-link" to="/" aria-label="home page">
            <Logo />
          </NavLink>
          </div>
            <div className="about">
            <NavLink to="/about" aria-label="About page">
              About
            </NavLink>
            </div>
            <div className="qr-menus">
            <NavLink to="/qr-menus" aria-label="QR menus page">
              QR Menus
            </NavLink>
            </div>
            <div className="services">
            <NavLink to="/services" aria-label="Services page">
              Services
            </NavLink>
            </div>
            <div className="contact-us">
            <NavLink to="/contact" aria-label="Contact page">
              Contact Us
            </NavLink>
            </div>
          <div className="sign-up">
          <button className="cta cta--white-ghost cta--small cta--footer">Sign Up</button>
          </div>
          <div className="sign-in">
          <button className="cta cta--white-ghost cta--small cta--footer">Sign In</button>
          </div>
        </div>
      </div>
      <div className="footer--bottom flex">
        <div>&copy; {new Date().getFullYear()} Pure Func LLC</div>
        <a href="mailto:contact@purefunc.io">Email: contact@purefunc.io</a>
      </div>
    </footer>
  )
}
