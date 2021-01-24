import React, { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const FadeIn: FC<{
  isActive: boolean
  compKey?: string
}> = ({ children, isActive = false, compKey = 'auniquestring-fade-in' }) => (
  <AnimatePresence>
    {isActive && (
      <motion.div key={compKey} exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {children}
      </motion.div>
    )}
  </AnimatePresence>
)
