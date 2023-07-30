import React from 'react'
import cn from 'classnames'

import ContainerListProps from './types.props'
import s from './styles.module.css'

export const ContainerList = ({ children, className, ...props }: ContainerListProps) => {
  return (
    <ul className={cn(className, s.wrapper_list)} {...props}>
      {children}
    </ul>
  )
}
