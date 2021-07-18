import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Icon } from './Icon'

type Props = {
  title?: string
  caretColor?: string
  titleSize?: string
  isCaretHidden?: boolean
  isCentered?: boolean
  children: JSX.Element
}

export function Accordion({
  title = '',
  children,
  caretColor = 'var(--lineColor)',
  titleSize = 'var(--h4)',
  isCentered = false,
  isCaretHidden = false,
}: Props) {
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
    <AccordionWrapper
      $isMenuOpen={isMenuOpen}
      $hasTitle={!!title}
      className="accordion-wrapper"
      titleSize={titleSize}
      $isCentered={isCentered}
    >
      <div className="accordion" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {title && <h4 className="accordion-title">{title}</h4>}
        {!isCaretHidden && (
          <Icon
            name="caret"
            color={caretColor}
            style={{
              transform: isMenuOpen && 'rotate(-180deg)',
              transition: 'var(--transitionSpeed) ease-in-out transform',
              minWidth: '14px',
              marginLeft: '10px',
            }}
          />
        )}
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
    justify-content: ${({ $hasTitle, $isCentered }) => ($hasTitle && !$isCentered ? 'space-between' : 'center')};
    align-items: center;
    overflow: hidden;
    padding: 0;
    cursor: pointer;
    margin: 0;
    .accordion-title {
      text-align: ${({ $isCentered }) => ($isCentered ? 'center' : 'left')};
      font-size: ${({ titleSize }) => titleSize};
      margin: 0;
    }
  }
  div {
    overflow: hidden;
  }
`
