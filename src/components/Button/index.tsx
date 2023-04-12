import React, { useState } from 'react'
import cn from 'classnames'

import ButtonsProps from './types.props'
import styles from './styles.module.css'

export const Button = ({
  className,
  notAllow,
  children,
  onMouseUp,
  onMouseDown,
  ...props
}: ButtonsProps): JSX.Element => {
  const [click, setClick] = useState(false)

  const handleClickDown = () => {
    setClick(true)
    return onMouseDown
  }

  const handleClickUp = () => {
    setClick(false)
    return onMouseUp
  }

  return (
    <button
      className={cn(styles.button, className, {
        [styles.button_click]: click,
        [styles.button_block]: notAllow,
      })}
      onMouseDown={handleClickDown}
      onMouseUp={handleClickUp}
      {...props}
    >
      {children}
    </button>
  )
}
