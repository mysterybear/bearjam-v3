import React from 'react';
import SvgTriangle from './SvgTriangle';
import { motion } from 'framer-motion';
import { useState } from 'react';
import theme from 'tailwindcss/defaultTheme';

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
    <div className={`max-w-sm p-5 mt-5 bg-gray-100 rounded-lg border-2 border-gray-300 shadow-lg ${className}`} {...otherProps} >
      <div className="rounded-lg overflow-hidden -mt-12 shadow-md">
        <Avatar preserveAspectRatio="xMidYMid slice" />
      </div>
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
      <div className="inline-block px-2 py-5">
        <motion.p
          className="relative overflow-hidden text-base leading-normal"
          animate={open ? { height: 'auto' } : { height: '4.5em' }}
          transition={{ type: 'spring', damping: 20, stiffness: 75, mass: 0.4 }}
        >
          <span>{body}</span>
          <motion.button
            className="w-5 absolute focus:outline-none select-none right-0 bottom-0"
            onClick={() => setOpen(!open)}
            initial={{
              rotate: 90,
              backgroundImage: 'radial-gradient(circle at center, rgba(247,250, 252, 1) 50%, rgba(247,250,252,0.40379901960784315) 100%)'
            }}
            animate={open ? { rotate: 150 } : { rotate: 90 }}
          >
            <SvgTriangle />
          </motion.button>
        </motion.p>
      </div>
    </div>
  )
}

export default Card
