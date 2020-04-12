import { AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';
import Layout from '../components/layout';
import AboutTemplate from './about';
import DefaultTemplate from './default';

const templateComponents = {
  about: AboutTemplate,
  default: DefaultTemplate,
  index: DefaultTemplate
}

const IndexTemplate = ({ pageContext, children }) => {
  const templateKey = pageContext.frontmatter.templateKey || 'default'
  console.log(templateKey)
  const Template = templateComponents[templateKey]
  return (
    <Template>
      {children}
    </Template>
  );
}

export default IndexTemplate;
