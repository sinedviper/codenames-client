import React from 'react'
import cn from 'classnames'

import s from './styles.module.css'
import ContainerWrapperProps from './types.props'

export const ContainerWrapper = ({
  children,
  className,
  color,
  ...props
}: ContainerWrapperProps): JSX.Element => {
  return (
    <div
      className={cn(className, s.wrapper, {
        [s.wrap_orange]: color === 'orange',
        [s.wrap_purple]: color === 'purple',
        [s.wrap_green]: color === 'green',
        [s.wrap_blue]: color === 'blue',
      })}
      {...props}
    >
      {children}
    </div>
  )
}
