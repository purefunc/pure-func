import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'
import { Dropdown } from 'components'
import { Avatar } from 'utilities'
import { useAuth, Types } from 'global'

export const UserMenu = ({ user }: Props) => {
  const history = useHistory()
  const { dispatch: authDispatch } = useAuth()

  const logout = () => {
    Cookies.remove('token')
    authDispatch({ type: Types.Logoff })
    history.push('/')
  }

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
          {/* <NavLink className="nav-link" onClick={toggle} to="/dashboard/settings" aria-label="settings">
            Settings
          </NavLink> */}
          <button onClick={logout}>Logout</button>
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
