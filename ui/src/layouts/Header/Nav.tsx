import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Modal } from 'components'
import { useAuth } from 'global'
import { Login } from '../Login/Login'

export function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { state, dispatch } = useAuth()

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
    <nav className=" header__nav flex">
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
        <button
          onClick={() => {
            if (state.isLoggedIn) {
              // TODO: ADD LOGOFF FUNCTION
            } else {
              openModal()
            }
          }}
          className="cta cta--white-ghost cta--small"
        >
          {state.isLoggedIn ? 'Log Out' : 'Sign In'}
        </button>
        <Link className="cta cta--white cta--small" to="/contact">
          Contact Us
        </Link>
        <Modal isActive={isModalOpen} closeAction={closeModal}>
          <Login />
        </Modal>
      </div>
    </nav>
  )
}
