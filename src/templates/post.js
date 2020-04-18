import { Link } from "gatsby"
import React from "react"
import Presence from "../components/Presence"
import SEO from "../components/SEO"

const shortcodes = { Link } // Provide common components here

export default function PostTemplate(props) {
  return (
    <Presence key="defaultThing">
      {/* <SEO title={mdx.frontmatter.title} /> */}
      <pre>{JSON.stringify(props, null, 2)}</pre>
      {/* <div>
        <h1>{mdx.frontmatter.title}</h1>
        <h3>by {mdx.frontmatter.author}</h3>
        <time><em>{mdx.frontmatter.date}</em></time>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div> */}
    </Presence>
  )
}
