import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from 'components'

import './footer.scss'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer--nav mobile--nav">
        <div className="footer--logo">
          <NavLink data-testid="logo-link" to="/" aria-label="home page">
            <Logo />
          </NavLink>
        </div>
        <div className="grid grid--cols-3 mobile--nav margin-0">
            <NavLink className="text-white" to="/about" aria-label="About page">
              About
            </NavLink>
            <NavLink className="text-white" to="/qr-menus" aria-label="QR menus page">
              QR Menus
            </NavLink>
            <button className="cta cta--white-ghost butorder">Sign In</button>
            <NavLink className="text-white" to="/services" aria-label="Services page">
              Services
            </NavLink>
            <NavLink className="text-white" to="/contact" aria-label="Contact page">
              Contact Us
            </NavLink>
            <button className="cta cta--white-ghost">Join</button>
        </div>
      </div>
      <div className="flex mobile--nav footer--bottom">
        <div className="">&copy; {new Date().getFullYear()} Pure Func LLC</div>
        <a href="">Terms and Services</a>
        <a className="" href="mailto:contact@purefunc.io">Email: contact@purefunc.io</a>
      </div>
    </footer>
  )
}
