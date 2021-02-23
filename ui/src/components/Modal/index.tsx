import React, { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Portal } from '../Portal'
import { useScrollFreeze } from '../../hooks'
import { Icon } from '../Icon'
import './modal.scss'

interface ModalAnimationProps {
  isActive: boolean
  maxWidth?: string
  children: ReactNode
  closeAction?: () => void
}

export function Modal({ isActive, children, maxWidth = `530px`, closeAction }: ModalAnimationProps) {
  return (
    <Portal>
      <AnimatePresence>
        {isActive && (
          <ModalContent children={children} maxWidth={maxWidth} closeAction={closeAction} isActive={isActive} />
        )}
      </AnimatePresence>
    </Portal>
  )
}

const ModalContent = ({ isActive, children, maxWidth, closeAction }: ModalAnimationProps) => {
  useScrollFreeze()
  const pointerEvents = isActive ? `all` : `none`
  return (
    <>
      <div className="modal">
        <motion.div
          className="modal__transport"
          style={{ maxWidth }}
          exit={{ opacity: 0, y: -40 }}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="modal__card" style={{ pointerEvents }} data-testid="modal">
            {closeAction && (
              <button className="modal__close-button" onClick={closeAction}>
                <Icon
                  name="close"
                  color="var(--purple)"
                  style={{
                    width: '36px',
                    height: '36px',
                    marginBottom: 'var(--smallestSpace)',
                  }}
                />
              </button>
            )}
            <div>{children}</div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="modal__background"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={closeAction || null}
      />
    </>
  )
}
