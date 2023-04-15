import React from 'react'
import cn from 'classnames'

import InputProps from './types.props'
import styles from './styles.module.css'
import { SvgQuestion } from 'assets/svg'
import { toast } from 'react-toastify'

export const Input = ({ value, question, className, ...props }: InputProps): JSX.Element => {
  const handleClickInfo = () => {
    if (question) {
      toast.info(question)
    }
  }

  return (
    <div className={styles.wrapper_input}>
      <input value={value} className={cn(styles.input, className)} type={'text'} {...props} />
      {question && (
        <span className={styles.question} onClick={handleClickInfo}>
          <SvgQuestion />
        </span>
      )}
    </div>
  )
}
