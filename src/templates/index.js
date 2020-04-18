import React from 'react';
import AboutTemplate from './about';
import HomeTemplate from './home';
import _ from 'lodash'
import PostTemplate from './post';

const templateComponents = {
  default: PostTemplate,
  home: HomeTemplate,
  about: AboutTemplate,
}

const TemplateIndex = ({
  pageContext: {
    frontmatter
  },
  children
}) => {
  const templateKey = _.get(frontmatter, 'templateKey', 'default')
  const Template = templateComponents[templateKey]

  return (
    <Template frontmatter={frontmatter}>
      {children}
    </Template>
  );
}

export default TemplateIndex;
