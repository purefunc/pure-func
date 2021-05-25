import React from 'react'
import styled from 'styled-components'
import { useState, useRef, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useClickOutside } from 'hooks'
import { Icon } from './Icon'

interface DropdownProps {
  renderMenuItems(arg: () => void): ReactNode
  style?: object
  menuIcon?: ReactNode
}

export const Dropdown = ({ renderMenuItems, style = {}, menuIcon = '' }: DropdownProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const toggle = () => setIsMenuToggled(!isMenuToggled)
  const ref = useRef<HTMLDivElement>(null!)

  useClickOutside(ref, () => setIsMenuToggled(false))

  return (
    <MenuWrapper data-testid="dropdown-menu" ref={ref} style={style}>
      <MenuIcon data-testid="menu-icon" onClick={toggle}>
        {menuIcon || <Icon name="menu" color="var(--primaryColor)" />}
      </MenuIcon>
      <AnimatePresence>
        {isMenuToggled && (
          <MenuContainer
            style={{
              pointerEvents: isMenuToggled ? 'all' : 'none',
              transformOrigin: 'top center',
            }}
            exit={{ opacity: 0, scaleY: 0.9 }}
            animate={{ opacity: 1, scaleY: 1.0 }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.1 }}
            initial={{ opacity: 0, scaleY: 0.9 }}
          >
            {renderMenuItems(toggle)}
          </MenuContainer>
        )}
      </AnimatePresence>
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  margin-left: var(--space);
  perspective: 400px;
  display: flex;
  justify-content: flex-end;
`

const MenuContainer = styled(motion.div)`
  position: absolute;
  top: 120%;
  background: var(--white);
  border-radius: var(--cardRadius);
  padding: var(--space);
  right: 0;
  min-width: 200px;
  text-align: center;
  z-index: 5;
  box-shadow: var(--elevation-5);

  > .nav-link {
    text-decoration: none;
    color: var(--textColor);
    margin-top: var(--smallestSpace);
    display: block;
    &:first-of-type {
      margin-top: 0;
    }
  }

  button {
    border: none;
    width: 100%;
    background: transparent;
    text-transform: none;
    font-weight: 600;
    padding: 0;
    color: var(--textColor);
    box-shadow: none;
    margin-top: var(--smallestSpace);
  }
`

const MenuIcon = styled.button`
  background: transparent;
  border: none;
  outline: none;
`
