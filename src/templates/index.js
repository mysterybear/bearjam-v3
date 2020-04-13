import * as R from 'ramda';
import React from 'react';
import AboutTemplate from './about';
import HomeTemplate from './home';

const templateComponents = {
  default: x => x,
  home: HomeTemplate,
  about: AboutTemplate,
}

const TemplateIndex = ({
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

export default TemplateIndex;
