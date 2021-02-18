import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from 'components'

import './footer.scss'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footnav footMobile footstack">
        <div className="">
          <NavLink className="" data-testid="logo-link" to="/" aria-label="home page">
            <Logo />
          </NavLink>
        </div>
        <div className="grid grid--cols-3 footMobile collapse">
            <NavLink className="text-white" to="/about" aria-label="About page">
              About
            </NavLink>
            <NavLink className="text-white" to="/qr-menus" aria-label="QR menus page">
              QR Menus
            </NavLink>
            <button className="cta cta--white-ghost cta--footer butorder">Sign Up</button>
            <NavLink className="text-white" to="/services" aria-label="Services page">
              Services
            </NavLink>
            <NavLink className="text-white" to="/contact" aria-label="Contact page">
              Contact Us
            </NavLink>
          <button className="cta cta--white-ghost cta--footer">Sign In</button>
        </div>
      </div>
      <div className="flex subFooter">
        <div>&copy; {new Date().getFullYear()} Pure Func LLC</div>
        <a className="text-white" href="mailto:contact@purefunc.io">Email: contact@purefunc.io</a>
      </div>
    </footer>
  )
}
