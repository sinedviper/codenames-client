import React from 'react'
import cn from 'classnames'

import InputProps from './types.props'
import styles from './styles.module.css'

export const Input = ({ value, className, ...props }: InputProps): JSX.Element => {
  return <input value={value} className={cn(styles.input, className)} type={'text'} {...props} />
}
