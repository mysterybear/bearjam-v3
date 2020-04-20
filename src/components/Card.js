import React from 'react';
import SvgTriangle from './SvgTriangle';
import { motion } from 'framer-motion';
import { useState } from 'react';
import theme from 'tailwindcss/defaultTheme';
import IconExpand from './icons/IconExpand';

const Card = ({
  className,
  name,
  email,
  socialLinks,
  body,
  avatar: Avatar,
  ...otherProps
}) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={`relative flex justify-center my-12`}>
      <div className="w-3/4 z-50 absolute rounded-lg -mt-12 overflow-hidden shadow-md border">
        <Avatar preserveAspectRatio="xMidYMid slice" />
      </div>
      <div className={`max-w-sm relative overflow-hidden p-5 pt-48 bg-gray-100 rounded-lg border-2 border-gray-300 shadow-lg ${className}`} {...otherProps} >
        <div className="flex-col px-5 py-5 text-center">
          <h1>{name}</h1>
          <h3>{email}</h3>
        </div>
        <div className="flex px-5 justify-center">
          {socialLinks.map(({ Icon, url }) => (
            <a key={url} href={url}>
              <motion.div whileHover={{ scale: 1.2 }} className="rounded-full bg-purple-300 p-2 mx-2 shadow-md hover:bg-purple-400 transition-colors duration-300 ease-in-out">
                <Icon className="w-8 text-purple-100 fill-current stroke-none" />
              </motion.div>
            </a>
          ))}
        </div>
        <motion.div
          className="px-2 py-5"
          initial="closed"
          animate={open ? "open" : "closed"}
          variants={{
            open: {},
            closed: {}
          }}
          onClick={() => setOpen(!open)}
        >
          <motion.p
            className="overflow-hidden text-base leading-normal"
            variants={{
              open: {
                height: 'auto',
              },
              closed: {
                height: '4.5em',
              }
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 75, mass: 0.4 }}
          >
            <span>{body}</span>
          </motion.p>
          <motion.div
            className="absolute w-full bottom-0 left-0 flex justify-center py-4"
            style={{
              backgroundImage: `linear-gradient(to top, ${theme.colors.gray[800]}, ${theme.colors.gray[700]} 27%, transparent)`
            }}
            variants={{
              open: {
                y: 100
              },
              closed: {
                y: 0
              }
            }}
          >
            <motion.button
              className="w-12 rounded-full bg-gray-100 border border-purple-900 text-purple-400 stroke-current fill-current focus:outline-none"
              initial="closed"
              variants={{
                open: {
                  rotate: 180,
                  y: -100
                },
                closed: {
                  rotate: 0,
                  y: 0
                }
              }}
            // initial={{
            //   rotate: 90,
            //   backgroundImage: 'radial-gradient(circle at center, rgba(247,250, 252, 1) 50%, rgba(247,250,252,0.40379901960784315) 100%)'
            // }}
            >
              <IconExpand />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Card
