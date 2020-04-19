import React from 'react'
import Button from './Button'
import Link from './Link'
import cx from 'classnames'

const defaultClassName =
  ""

const ButtonLink = ({
  className,
  to,
  children,
  ...props
}) => {
 return (
   <Button className={cx(defaultClassName, className)} {...props}>
     <Link to={to}>{children}</Link>
   </Button>
 );
}

export default ButtonLink;
