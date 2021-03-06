import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Logo } from 'components'

import './footer.scss'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__nav container flex">
          <div className="footer__logo">
            <NavLink data-testid="logo-link" to="/" aria-label="home page">
              <Logo isWhite />
            </NavLink>
          </div>
          <div>
            <NavLink className="text-white" to="/about" aria-label="About page">
              About
            </NavLink>
            <NavLink className="text-white" to="/menus" aria-label="Digital Menus page">
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
      <div className="footer__bottom">
        <div className="wrapper">
          <div className="flex container">
            <span>&copy; {new Date().getFullYear()} Pure Func LLC</span>
            {/* <div>
              <Link to="/terms" aria-label="Terms & Conditions page">
                Terms & Conditions
              </Link>
              <Link to="/privacy" aria-label="Privacy Poiilicy Page">
                Privacy Policy
              </Link>
            </div> */}
            <a href="mailto:contact@purefunc.io">Email: contact@purefunc.io</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
