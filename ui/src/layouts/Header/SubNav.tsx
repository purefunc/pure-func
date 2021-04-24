import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export function SubNav() {
  return (
    <NavWrapper>
      <div className="wrapper">
        <NavLink className="nav-link" to="/dashboard/sites">
          Sites
        </NavLink>
        <NavLink className="nav-link" to="/dashboard/menus">
          Menus
        </NavLink>
        {/* <NavLink className="nav-link" to="/dashboard/billing">
          Billing
        </NavLink> */}
        <NavLink className="nav-link" to="/dashboard/teams">
          Team Settings
        </NavLink>
      </div>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  width: 100%;
  background: var(--lightestGray);
  border-bottom: var(--line);
  .nav-link + .nav-link {
    color: var(--textColor);
    margin-left: var(--space);
  }
`
