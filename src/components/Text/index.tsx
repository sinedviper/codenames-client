import React from 'react'
import cn from 'classnames'

import TextProps from './types.props'
import styles from './styles.module.css'

export const Text = ({ className, children, ...props }: TextProps): JSX.Element => {
  return (
    <p className={cn(styles.header, className)} {...props}>
      {children}
    </p>
  )
}
