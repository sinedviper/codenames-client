import React from 'react'
import cn from 'classnames'

import Header2Props from './types.props'
import styles from './styles.module.css'

export const Header2 = ({ className, children, ...props }: Header2Props): JSX.Element => {
  return (
    <h2 className={cn(styles.header, className, {})} {...props}>
      {children}
    </h2>
  )
}
