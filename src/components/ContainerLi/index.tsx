import React from 'react'
import cn from 'classnames'

import ContainerLiProps from './types.props'
import s from './styles.module.css'

export const ContainerLi = ({ className, ...props }: ContainerLiProps) => {
  return <li className={cn(className, s.wrapper_list)} {...props}></li>
}
