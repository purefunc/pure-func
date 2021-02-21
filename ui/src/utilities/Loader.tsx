import React from 'react'
import { motion } from 'framer-motion'
import Portal from './Portal'
import logo from '../logo.svg'

const Loader = () => (
  <Portal>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <img src={logo} alt="" />
    </motion.div>
  </Portal>
)

export default Loader
