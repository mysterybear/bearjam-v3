import { motion } from 'framer-motion'
import React from 'react'
import ButtonLink from '../components/ButtonLink'
import Presence from '../components/Presence'
import SEO from '../components/SEO'
import SvgIsometricOne from '../components/SvgIsometricOne'
import { springTwo, springQuickExit } from '../animations';


const variants = i => ({
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      ...springTwo
    }
  },
  exit: {
    opacity: 0,
    x: i % 2 == 0 ? -200 : 200,
    transition: {
      ...springQuickExit,
    }
  }
})

const HomeTemplate = ({
  frontmatter,
  children
}) => {
  return (
    <Presence key="indexPage" className="mx-3">
      <SEO title="Home" />
      <section className="mt-5 sm:mt-8 flex items-center flex-col sm:flex-row sm:justify-between">
        <motion.div
          className="w-full mb-4 sm:order-last sm:flex-1 flex justify-end max-w-lg"
          variants={variants(1)}
        >
          <SvgIsometricOne className="w-full" />
        </motion.div>
        <motion.div
          className="my-6 text-center sm:flex-1 sm:text-left sm:max-w-xs"
          variants={variants(0)}
        >
          <h1 className="leading-10">{frontmatter.headline.heading}</h1>
          <p className="leading-6 tracking-wide my-6">{frontmatter.headline.paragraph}</p>
          <div className="flex justify-center mt-6 sm:justify-start">
            <ButtonLink to="/blog">Read blog</ButtonLink>
          </div>
        </motion.div>
      </section>
      <section className="mt-12 sm:mt-0">
        <motion.h1
          className="leading-10 text-center sm:text-left"
          variants={variants(0)}
        >{frontmatter.stuffWeDo.heading}</motion.h1>
        <div className="flex flex-wrap justify-between">
          {frontmatter.stuffWeDo.blurbs.map(({ heading, blurb }, i) => (
            <motion.div
              key={heading}
              className="w-full sm:w-5/12 sm:flex-grow sm:max-w-xs lg:max-w-sm mt-8"
              variants={variants(i)}
            >
              <h3>{heading}</h3>
              <p className="my-2 sm:pr-8 md:pr-4 lg:pr-0">{blurb}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="mt-12 sm:mt-0 flex border-2 border-red-500 bg-purple-200">
          <div>
            <h2>We'd love to hear from you.<br/>Say hello to magda@bearjam.dev</h2>
          </div>
          <div className="space-evenly">
            <ButtonLink to="/about">About us</ButtonLink>
            <ButtonLink to="/contact">Work with us</ButtonLink>
          </div>
      </section>
    </Presence>
  )
}

export default HomeTemplate
