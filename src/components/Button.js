import React from 'react';
import cx from 'classnames'
import { motion } from 'framer-motion';

const defaultClassName =
  "bg-pink-400 px-4 py-2 rounded-lg shadow-md border-2"

const Button = ({
  className,
  children,
  ...props
}) => {
  return (
    <motion.button
      className={cx(defaultClassName, className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
