import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Logo, Modal } from 'components'
import { useAuth } from 'global'
import { Login } from '../Login/Login'
import { Dropdown } from './Dropdown'
import { SignUp } from '../Login/Signup'
import { Reset } from '../Login/Reset'

export function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { state, dispatch } = useAuth()

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
    setType('login')
  }

  const [type, setType] = useState('login')

  const toggleType = (val: string) => {
    setType(val)
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
        <Link className="cta cta--white cta--small" to="/contact">
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
        className="cta cta--white-ghost cta--small">
        {state.isLoggedIn ? 'Log Out' : 'Join'}
        </button>
        <Modal isActive={isModalOpen} closeAction={closeModal}>
          {type === 'login' &&
            <div>
              <Login />
              <p>
                Don't have an account?
              </p>
              <button className="cta cta--white cta--small" onClick={() => toggleType('signup')}>
              Register
              </button>
              <p>
                Forgot your password?
              </p>
              <button className="cta cta--white cta--small" onClick={() => toggleType('reset')}>
                Reset
              </button>
            </div>}
          {type === 'signup' &&
            <div>
              <SignUp />
              <p>Already have an account?</p>
              <button className="cta cta--white cta--small" onClick={() => toggleType('login')}>
                Sign in
              </button>
            </div>}
          {type === 'reset' &&
            <div>
              <Reset />
              <p>
                Already have an account?
              </p>
              <button className="cta cta--white cta--small" onClick={() => toggleType('login')}>
                Sign in
              </button>
            </div>}
        </Modal> */}
      </div>
    </nav>
  )
}
