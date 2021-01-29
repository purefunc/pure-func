import React, { useState, useRef } from "react"
import styled from "react-router-dom"
import { Flex, below } from "react-router-dom"
import { useScrollFreeze } from "../hooks"
import { motion, AnimatePresence } from "framer-motion"
import Portal from "./Portal"
import Icon from "./Icon"
import MobileNav from "./MobileNav"
import logo from "../images/stone_white_logo.png"

type LinkType = {
  to: string
  text: string
}

type Props = {
  links: LinkType[]
}

const MobileMenu = ({ links }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <MenuIcon onClick={toggleMenu}>
        <Icon name="hamburger" color="var(--purple)" />
      </MenuIcon>
      <Portal>
        <AnimatePresence>
          {isMenuOpen && (
            <MenuModal
              isMenuOpen={isMenuOpen}
              closeMenu={closeMenu}
              links={links}
            />
          )}
        </AnimatePresence>
      </Portal>
    </>
  )
}

export default MobileMenu

type MenuModalProps = {
  isMenuOpen: boolean
  closeMenu: () => void
  links: LinkType[]
}

const MenuModal = ({ isMenuOpen, closeMenu, links }: MenuModalProps) => {
  useScrollFreeze()
  const pointerEvents = isMenuOpen ? `all` : `none`

  return (
    <>
      <ModalWrapper>
        <Transport
          initial={{ right: "100%" }}
          animate={{ right: "0%" }}
          exit={{ right: "100%" }}
          transition={{ duration: 0.3 }}
          style={{ position: "relative" }}
        >
          <MenuWrapper style={{ pointerEvents }}>
            <Flex>
              <button onClick={closeMenu}>
                <Icon name="close" color="var(--white)" />
              </button>
            </Flex>
            <MobileNav links={links} closeMenu={closeMenu} />
          </MenuWrapper>
        </Transport>
      </ModalWrapper>
    </>
  )
}

const MenuIcon = styled.button`
  display: none;
  margin-top: 5px;
  ${below.medium`
    display: block;
  `};
`

const MenuWrapper = styled.div`
  padding: var(--basePadding);
  background: var(--purple);
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  margin-right: 1rem;
  z-index: var(--highestLevel);
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  height: 100vh;
  overflow-y: scroll;
  pointer-events: none;
  z-index: var(--highestLevel);
`

const Transport = styled(motion.div)`
  width: 100%;
`
