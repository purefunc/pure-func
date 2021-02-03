import React from 'react'
import { NavLink } from 'react-router-dom'

export function Nav() {
  return (
    <nav>
      <NavLink to="/about" aria-label="About page">
        About
      </NavLink>
      <NavLink to="/qr-menus" aria-label="QR menus page">
        QR Menus
      </NavLink>
    </nav>
  )
}
