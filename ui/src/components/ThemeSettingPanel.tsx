import React from 'react'
import styled from 'styled-components'
import { Portal } from './Portal'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from 'components'
import { ThemeSettingsForm } from './ThemeSettingsForm'

const PanelWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 400px;
  padding: var(--space);
  box-shadow: var(--elevation-3);
  background: var(--backgroundColor);
  overflow-y: scroll;
`

export function ThemeSettingPanel({ isActive, closeAction }) {
  return (
    <Portal>
      <AnimatePresence>
        {isActive && (
          <PanelWrapper exit={{ x: 400 }} initial={{ x: 400 }} animate={{ x: 0 }}>
            <div className="flex">
              <h5 className="margin-0">Theme Settings</h5>
              <Button onClick={closeAction} size="small">
                X
              </Button>
            </div>
            <div className="margins">
              <ThemeSettingsForm />
            </div>
          </PanelWrapper>
        )}
      </AnimatePresence>
    </Portal>
  )
}
