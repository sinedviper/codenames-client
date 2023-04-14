import React, { useState } from 'react'
import cn from 'classnames'

import InputColorProps from './types.props'
import styles from './styles.module.css'

export const InputColor = ({
  colorChoose,
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
        onChange={handleChangeColor}
        className={cn(styles.input, className)}
        type={'color'}
        {...props}
      />
      <div style={{ background: colorChoose ?? colorIput }}></div>
    </div>
  )
}
