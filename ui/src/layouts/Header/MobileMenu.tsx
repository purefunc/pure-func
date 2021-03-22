import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollFreeze } from 'hooks'
import { Icon, Portal } from 'components'

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <button className="menu-icon" onClick={toggleMenu}>
        <Icon name="hamburger" color="var(--white)" />
      </button>
      <Portal>
        <AnimatePresence>{isMenuOpen && <MenuModal isMenuOpen={isMenuOpen} closeMenu={closeMenu} />}</AnimatePresence>
      </Portal>
    </>
  )
}

type MenuModalProps = {
  isMenuOpen: boolean
  closeMenu: () => void
}

const MenuModal = ({ isMenuOpen, closeMenu }: MenuModalProps) => {
  useScrollFreeze()
  const pointerEvents = isMenuOpen ? `all` : `none`

  return (
    <>
      <div className="mobile-menu-wrapper">
        <motion.div
          className="transport"
          initial={{ right: '100%' }}
          animate={{ right: '0%' }}
          exit={{ right: '100%' }}
          transition={{ duration: 0.3 }}
          style={{ position: 'relative' }}
        >
          <div className="mobile-menu" style={{ pointerEvents }}>
            <div className="flex">
              <button onClick={closeMenu}>
                <Icon name="close" color="var(--primaryColor)" />
              </button>
            </div>
            <nav className="mobile-nav">
              <NavLink to="/" className="nav-link" onClick={closeMenu} aria-label="Homepage">
                Home
              </NavLink>

              <NavLink to="/services" className="nav-link" onClick={closeMenu} aria-label="Services page">
                Services
              </NavLink>

              <NavLink to="/menus" className="nav-link" onClick={closeMenu} aria-label="Digital Menus page">
                Digital Menus
              </NavLink>

              <NavLink to="/sites" className="nav-link" onClick={closeMenu} aria-label="Website Templates page">
                Website Templates
              </NavLink>

              <NavLink to="/about" className="nav-link" onClick={closeMenu} aria-label="About page">
                About
              </NavLink>

              <Link className="cta cta--gradient" to="/contact/" onClick={closeMenu}>
                Contact Us
              </Link>
            </nav>
          </div>
        </motion.div>
      </div>
    </>
  )
}
