import React, { useState } from 'react'
import cn from 'classnames'

import InputColorProps from './types.props'
import styles from './styles.module.css'

export const InputColor = ({
  value,
  setChange,
  className,
  ...props
}: InputColorProps): JSX.Element => {
  const [colorIput, setColorInput] = useState('#000000')

  const handleChangeColor = (e) => {
    setColorInput(e.target.value)
    setChange && setChange(e)
  }

  return (
    <div className={styles.color}>
      <input
        value={value}
        onChange={handleChangeColor}
        className={cn(styles.input, className)}
        type={'color'}
        {...props}
      />
      <div style={{ background: value ?? colorIput }}></div>
    </div>
  )
}
