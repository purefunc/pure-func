import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export function SubNav() {
  return (
    <NavWrapper>
      <div className="wrapper">
        <NavLink className="nav-link" to="/dashboard">
          Sites
        </NavLink>
        <NavLink className="nav-link" to="/dashboard">
          Menus
        </NavLink>
        <NavLink className="nav-link" to="/dashboard">
          Billing
        </NavLink>
        <NavLink className="nav-link" to="/dashboard">
          Team Settings
        </NavLink>
      </div>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  width: 100%;
  background: var(--lightestGray);
  box-shadow: var(--elevation-1);
  .nav-link + .nav-link {
    color: var(--textColor);
    margin-left: var(--space);
  }
`
