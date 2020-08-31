import React from 'react';
import { motion } from 'framer-motion';

export default function ModalImg({ selectedImg, setSelectedImg }) {

  function handleClick(event) {
    if (event.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }

  return (
    <motion.div 
      className="backdrop" 
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img 
      src={ selectedImg } 
      alt="Largest"
      initial={{ y: '-100vh'}}
      animate={{ y: 0 }}
    />
    </motion.div>
  );
}