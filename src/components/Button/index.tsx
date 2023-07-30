import React, { useState } from 'react'
import cn from 'classnames'

import ButtonsProps from './types.props'
import s from './styles.module.css'

export const Button = ({
  className,
  color,
  children,
  disabled,
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
      className={cn(className, s.button, {
        [s.button_click]: click,
        [s.button_orange]: color === 'orange',
        [s.button_pink]: color === 'pink',
        [s.button_purple]: color === 'purple',
        [s.button_blue]: color === 'blue',
        [s.button_green]: color === 'green',
      })}
      disabled={disabled}
      onMouseDown={handleClickDown}
      onMouseUp={handleClickUp}
      {...props}
    >
      {children}
    </button>
  )
}
