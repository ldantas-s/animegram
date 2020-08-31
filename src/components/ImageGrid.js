import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import useFirestore from '../hooks/useFirestore';


export default function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore('images');
  const [ message, setMessage ] = useState(null);

  useEffect(() => {
    if (docs.length < 1) {
      setMessage('Add a image')
    } else {
      setMessage(null);
    }
  }, [docs])
  
  return (
    <>
      <div className="img-grid">
        { docs && docs.map(doc => (
          <motion.div 
            layout
            whileHover={{ opacity: 1}}
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img 
              src={doc.url} 
              alt="uploaded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}


      </div>
      { message && <div className="empty">{message}</div> }
    </>
  );
}