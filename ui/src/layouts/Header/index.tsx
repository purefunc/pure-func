import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Logo, Modal } from 'components'
import { useAuth } from 'global'
import { Login } from '../Login/Login'

import './header.scss'

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { isLoggedIn } = useAuth()

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
            <NavLink className="nav-link" to="/about" aria-label="About page">
              About
            </NavLink>
            <NavLink className="nav-link" to="/services" aria-label="Services page">
              Services
            </NavLink>
            <NavLink className="nav-link" to="/menus" aria-label="Digital Menus page">
              Digital Menus
            </NavLink>
          </div>
          <div>
            <Link className="cta cta--white cta--small" to="/contact">
              Contact Us
            </Link>
            <button
              onClick={() => {
                if (isLoggedIn) {
                  logoff()
                } else {
                  openModal()
                }
              }}
              className="cta cta--white-ghost cta--small"
            >
              {isLoggedIn ? 'Log Out' : 'Sign Up'}
            </button>
            <Modal isActive={isModalOpen} closeAction={closeModal}>
              <Login />
            </Modal>
          </div>
        </nav>
      </div>
    </header>
  )
}
