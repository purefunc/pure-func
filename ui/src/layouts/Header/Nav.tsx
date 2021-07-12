import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Modal, Button } from 'components'
import { UserMenu } from './UserMenu'
import { LoginModal } from '../Login/LoginModal'

export function Nav({ isLoggedIn = false }) {
  const [type, setType] = useState('login')

  const toggleType = (val: string) => {
    setType(val)
  }
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
        <Button color="ghost" onClick={openModal}>
          Sign In
        </Button>
        <Button color="white" as={Link} to="/contact" className="contact-button">
          Contact Us
        </Button>
        <Modal isActive={isModalOpen} closeAction={closeModal}>
          <LoginModal />
        </Modal>
      </div>
    </>
  )

  const UserNavBar = (
    <div className="user-nav">
      <Button color="outline" as={Link} to="/dashboard/new/menu">
        + New Menu
      </Button>
      {/* <Dropdown
        menuIcon={<button className="cta cta--small cta--ghost">New +</button>}
        renderMenuItems={(toggle) => (
          <>
            <NavLink className="dashboard-nav-link" to="/dashboard/new/site" aria-label="Sites" onClick={toggle}>
              Site
            </NavLink>
            <NavLink className="dashboard-nav-link" to="/dashboard/new/menu" aria-label="Menus" onClick={toggle}>
              Menu
            </NavLink>
            <NavLink className="dashboard-nav-link" to="/dashboard/new/restaurant" aria-label="Menus" onClick={toggle}>
              Restaurant
            </NavLink>
            <NavLink className="dashboard-nav-link" to="/dashboard/new/pid" aria-label="Menus" onClick={toggle}>
              PID Tag
            </NavLink>
          </>
        )}
      /> */}
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
  .contact-button {
    margin-left: var(--smallSpace);
  }
  .user-nav {
    > * + * {
      margin-left: var(--space);
    }
  }
`
