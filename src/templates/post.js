import { Link } from "gatsby"
import React from "react"
import Presence from "../components/Presence"
import SEO from "../components/SEO"

const shortcodes = { Link } // Provide common components here

export default function PostTemplate({ frontmatter, children }) {
  return (
    <Presence key="defaultThing">
      <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <h3>by {frontmatter.author}</h3>
      <time><em>{frontmatter.date}</em></time>
      {children}
    </Presence>
  )
}
