import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Logo, Modal } from 'components'
import { useAuth } from 'global'
import { Login } from '../Login/Login'

import './header.scss'
import { Dropdown } from './Dropdown'

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { state, dispatch } = useAuth()

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
    <header className="header flex">
      <div className="header__inner wrapper">
        <h1 className="margin-0 logo">
          <NavLink data-testid="logo-link" to="/" aria-label="home page">
            <Logo />
          </NavLink>
        </h1>
        <nav className="flex">
          <div>
            <NavLink className="nav-link" to="/services" aria-label="Services page">
              Services
            </NavLink>
            <span className="nav-link">Products</span>
            {/* <Dropdown>
              <NavLink className="nav-link" to="/menus" aria-label="Digital Menu page">
                Digital Menus
              </NavLink>
              <NavLink className="nav-link" to="/sites" aria-label="Website Templates page">
                Website Templates
              </NavLink>
            </Dropdown> */}
            <NavLink className="nav-link" to="/about" aria-label="About page">
              About
            </NavLink>
          </div>
          <div>
            <Link className="cta cta--white" to="/contact">
              Contact Us
            </Link>
            {/* <button
              onClick={() => {
                if (state.isLoggedIn) {
                  // TODO: ADD LOGOFF FUNCTION
                } else {
                  openModal()
                }
              }}
              className="cta cta--white-ghost cta--small"
            >
              {state.isLoggedIn ? 'Log Out' : 'Join'}
            </button>
            <Modal isActive={isModalOpen} closeAction={closeModal}>
              <Login />
            </Modal> */}
          </div>
        </nav>
      </div>
    </header>
  )
}
