import React from 'react'
import cn from 'classnames'

import Header3Props from './types.props'
import styles from './styles.module.css'

export const Header3 = ({ className, children, ...props }: Header3Props): JSX.Element => {
  return (
    <h2 className={cn(styles.header, className, {})} {...props}>
      {children}
    </h2>
  )
}
