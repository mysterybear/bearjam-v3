import { motion } from 'framer-motion';
import React from 'react';
import { defaultAnimation } from '../animations';

const DefaultTemplate = ({ children }) => {
 return (
   <motion.div
      {...defaultAnimation}
      style={{ backgroundColor: "purple" }}
      key="defaultTemplate"
    >
     {children}
   </motion.div>
 );
}

export default DefaultTemplate;
