import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Modal } from 'components'
import { useAuth } from 'global'
import { Login } from '../Login/Login'
import { UserMenu } from './UserMenu'
import { SignUp } from '../Login/Signup'
import { Reset } from '../Login/Reset'

export function Nav({ isLoggedIn = false }) {
   const [type, setType] = useState('login')

  const toggleType = (val: string) => {
    setType(val)
  } 
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { state, dispatch } = useAuth()

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
        </Modal>
      </div>
    </>
  )

  const UserNavBar = (
    <div className="user-nav">
      <NavLink className="dashboard-nav-link" to="/dashboard/sites" aria-label="Sites">
        Sites
      </NavLink>
      <NavLink className="dashboard-nav-link" to="/dashboard/menus" aria-label="Menus">
        Menus
      </NavLink>
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
    }
  }
`
