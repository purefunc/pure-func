import React from 'react';
import { motion } from 'framer-motion';
import Portal from './Portal';
import logo from '../logo.svg';

type Props = {
  pastDelay?: boolean;
  error?: {} | null;
};

const Loader = ({ pastDelay = true, error }: Props) => {
  // Error and pastDelay stuff have to do with react-loadable
  if (error) console.error(error);
  if (pastDelay) {
    return (
      <Portal>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <img src={logo} alt="" />
        </motion.div>
      </Portal>
    );
  }
  return null;
};

export default Loader;
