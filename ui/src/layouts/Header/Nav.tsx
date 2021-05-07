import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Modal, Dropdown } from 'components'
import { Login } from '../Login/Login'
import { UserMenu } from './UserMenu'

export function Nav({ isLoggedIn = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const NavBar = (
    <>
      <div className="flex">
        <NavLink className="nav-link" to="/services" aria-label="Services page">
          Services
        </NavLink>
        <div className="dropdown">
          <NavLink className="nav-link" to="/menus" aria-haspopup aria-label="Products">
            Products
          </NavLink>
          <div className="dropdown-menu" aria-label="dropdown-menu">
            <div className="triangle"></div>
            <ul>
              <li>
                <NavLink className="nav-link" to="/menus" aria-label="Digital Menu page">
                  Digital Menus
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/sites" aria-label="Website Templates page">
                  Website Templates
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <NavLink className="nav-link" to="/about" aria-label="About page">
          About
        </NavLink>
      </div>
      <div>
        <button onClick={openModal} className="cta cta--white-ghost cta--small">
          Sign In
        </button>
        <Link className="cta cta--white cta--small" to="/contact">
          Contact Us
        </Link>
        <Modal isActive={isModalOpen} closeAction={closeModal}>
          <Login />
        </Modal>
      </div>
    </>
  )

  const UserNavBar = (
    <div className="user-nav">
      <Dropdown
        menuIcon={<button className="cta cta--small cta--ghost">New +</button>}
        renderMenuItems={(toggle) => (
          <>
            <NavLink className="dashboard-nav-link" to="/dashboard/sites/new" aria-label="Sites" onClick={toggle}>
              Site
            </NavLink>
            <NavLink className="dashboard-nav-link" to="/dashboard/menus/new" aria-label="Menus" onClick={toggle}>
              Menu
            </NavLink>
          </>
        )}
      />
    </div>
  )

  return (
    <>
      <NavWrapper className=" header__nav flex" $isLoggedIn={isLoggedIn}>
        {isLoggedIn ? UserNavBar : NavBar}
      </NavWrapper>
      {isLoggedIn && <UserMenu user={{}} />}
    </>
  )
}

const NavWrapper = styled.nav`
  ${({ $isLoggedIn }) =>
    $isLoggedIn &&
    `justify-content: flex-end;
  `};
  .user-nav {
    > * + * {
      margin-left: var(--space);
    }
    .dashboard-nav-link {
      color: var(--textColor);
      display: block;
    }
  }
`
