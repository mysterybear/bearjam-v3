import { motion } from 'framer-motion';
import * as R from 'ramda';
import React from 'react';
import { defaultVariants } from '../animations';
import Presence from '../components/Presence';
import AboutTemplate from './about';

const IndexTemplate = ({
  frontmatter,
  children
}) => {
  return (
    <Presence key="indexTemplate">
      <motion.div {...defaultVariants}>
        <pre>frontmatter: {JSON.stringify(frontmatter, null, 2)}</pre>
        {children}
      </motion.div>
    </Presence>
  )
}

const templateComponents = {
  default: x => x,
  index: IndexTemplate,
  about: AboutTemplate,
}

const TemplateController = ({

  pageContext: {
    frontmatter
  },
  children
}) => {
  const templateKey = R.propOr('default', frontmatter.templateKey)
  const Template = templateKey(templateComponents)

  return (
    <Template frontmatter={frontmatter}>
      {children}
    </Template>
  );
}

export default TemplateController;
