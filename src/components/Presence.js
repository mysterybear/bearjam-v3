import React from 'react'
import { motion } from 'framer-motion'
import cx from 'classnames'

const defaultClassName =
  "flex-1-0-auto max-w-4xl mx-auto pt-16 px-2 mb-12 sm:mb-20 sm:px-4 lg:px-0 overflow-x-hidden"

const Presence = ({ className, ...restProps })=> (
  <motion.div
    variants={{
      enter: {
        transition: {
          staggerChildren: 0.1,
        }
      },
      exit: {
        transition: {
          staggerChildren: 0.05,
          staggerDirection: -1
        }
      }
    }}
    initial="exit"
    animate="enter"
    exit="exit"
    className={cx(defaultClassName, className)}
    {...restProps}
  />
)

export default Presence
