import { motion } from 'framer-motion';
import React from 'react';
import { defaultAnimation } from '../animations';

const AboutTemplate = ({
  children
}) => {
  return (
    <motion.div
      {...defaultAnimation}
      key="aboutTemplate"
      style={{ backgroundColor: "lightgreen"}}
    >
      <h1>real about shit</h1>
      {children}
    </motion.div>
  );
}

export default AboutTemplate;
