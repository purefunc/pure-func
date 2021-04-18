import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'components'
import { Avatar } from 'utilities'

export const UserMenu = ({ user }: Props) => {
  return (
    <Dropdown
      menuIcon={<Avatar userPhotoId={user?.photoId} size={40} />}
      renderMenuItems={(toggle) => (
        <>
          <NavLink className="nav-link" onClick={toggle} to="/dashboard" aria-label="dashboard">
            Dashboard
          </NavLink>
          <NavLink className="nav-link" onClick={toggle} to="/dashboard/account" aria-label="account">
            Account
          </NavLink>
          <NavLink className="nav-link" onClick={toggle} to="/dashboard/settings" aria-label="settings">
            Settings
          </NavLink>
        </>
      )}
    />
  )
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

type Props = {
  user: {}
}
