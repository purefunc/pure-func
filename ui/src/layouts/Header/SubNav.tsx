import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export function SubNav({ teamId }) {
  return (
    <NavWrapper>
      <div className="wrapper">
        <NavLink className="nav-link" to={`/dashboard/teams/${teamId}/overview`}>
          Overview
        </NavLink>
        {/* <NavLink className="nav-link" to={`/dashboard/teams/${teamId}/restaurants`}>
          Restaurants
        </NavLink> */}
        <NavLink className="nav-link" to={`/dashboard/teams/${teamId}/menus`}>
          Menus
        </NavLink>
        {/* <NavLink className="nav-link" to={`/dashboard/teams/${teamId}/sites`}>
          Sites
        </NavLink> */}
        {/* <NavLink className="nav-link" to={`/dashboard/teams/${teamId}/pid`}>
          PID Tags
        </NavLink> */}
        <NavLink className="nav-link" to={`/dashboard/teams/${teamId}/billing`}>
          Billing
        </NavLink>
        <NavLink className="nav-link" to={`/dashboard/teams/${teamId}/settings`}>
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
