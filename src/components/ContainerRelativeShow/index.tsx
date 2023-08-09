import React from 'react'
import cn from 'classnames'

import s from './styles.module.css'
import ContainerWrapperProps from './types.props'

export const ContainerRelativeShow = ({
  children,
  className,
  show,
  ...props
}: ContainerWrapperProps): JSX.Element => {
  return (
    <div
      className={cn(className, s.wrapper, {
        [s.wrap_active]: show,
      })}
      {...props}
    >
      {children}
    </div>
  )
}
