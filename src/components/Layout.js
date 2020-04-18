/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'
import 'typeface-corben'
import 'typeface-inter'
import { MediaContext } from '../contexts'
import useMedia from '../hooks/useMedia'
import Footer from './Footer'
import Header from './Header'
import './styles/global.css'
import { motion } from 'framer-motion'

const Layout = ({ children }) => {

  useEffect(() => { console.log(`layout rendered`) }, [])

  const screen = useMedia()
  return (
    <MediaContext.Provider value={screen}>
      <Header key="header" />
      <motion.main
        className="flex flex-col min-h-full"
      >
        <AnimatePresence exitBeforeEnter>
          {children}
          <Footer
            key="footer"
            animate="enter"
            initial="exit"
            exit="exit"
            variants={{
              enter: {
                y: 0
              },
              exit: {
                y: 500
              }
            }}
            transition={{
              type: 'spring',
              damping: 50
            }}
          />
        </AnimatePresence>
      </motion.main>
    </MediaContext.Provider>
  )
}

export default Layout
