import React from 'react'
import { NavLink } from 'react-router-dom'

export function Nav() {
  return (
    <nav>
      <NavLink to="/about" aria-label="About page">
        About
      </NavLink>
      <NavLink to="/menus" aria-label="Digital menus page">
        Digital Menus
      </NavLink>
      <NavLink to="/sites" aria-label="Sites page">
        Site Templates
      </NavLink>
    </nav>
  )
}
