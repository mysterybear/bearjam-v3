import React from 'react';
import Presence from '../components/Presence';
import { motion } from 'framer-motion';
import { defaultVariants } from '../animations';

const AboutTemplate = ({
  children
}) => {
  return (
    <Presence key="aboutPage">
      <motion.div {...defaultVariants}>
        <p>real about shittt...</p>
      </motion.div>
    </Presence>
  );
}

export default AboutTemplate;
