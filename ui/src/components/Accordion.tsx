import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Icon } from './Icon'

type Props = {
  title?: string
  children: JSX.Element
}

export function Accordion({ title = '', children }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const variants = {
    expanded: () => ({
      height: 'auto',
      opacity: 1,
    }),
    collapsed: () => ({
      height: 0,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  }

  return (
    <AccordionWrapper $isMenuOpen={isMenuOpen} hasTitle={!!title} className="accordion-wrapper">
      <div className="accordion" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {title && <h3 className="h6">{title}</h3>}
        <Icon
          name="caret"
          style={{
            transform: isMenuOpen && 'rotate(-180deg)',
            transition: 'var(--transitionSpeed) ease-in-out transform',
            minWidth: '14px',
          }}
        />
      </div>
      <motion.div
        initial={isMenuOpen ? 'expanded' : 'collapsed'}
        animate={isMenuOpen ? 'expanded' : 'collapsed'}
        variants={variants}
      >
        {children}
      </motion.div>
    </AccordionWrapper>
  )
}

const AccordionWrapper = styled.div<{
  hasTitle?: boolean
  // $isMenuOpen?: boolean
}>`
  .accordion {
    display: flex;
    justify-content: ${({ hasTitle }) => (hasTitle ? 'space-between' : 'center')};
    align-items: center;
    overflow: hidden;
    padding: 0;
    cursor: pointer;
    margin: 0;
    h3 {
      margin: 0;
    }
  }
  div {
    overflow: hidden;
  }
  /* ${({ $isMenuOpen }) =>
    $isMenuOpen &&
    `
      h3 {
        color: var(--accentColor);
      }
    `}; */
`
