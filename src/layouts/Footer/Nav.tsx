import React from 'react'
import { NavLink } from 'react-router-dom'

export function Nav() {
  return (
    <nav>
      <NavLink to="/about" aria-label="about page">
        About
      </NavLink>
    </nav>
  )
}
