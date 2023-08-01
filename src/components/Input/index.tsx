import React from 'react'
import cn from 'classnames'

import InputProps from './types.props'
import s from './styles.module.css'
import { SvgQuestion } from 'assets/svg'
import { toast } from 'react-toastify'

export const Input = ({
  value,
  question,
  className,
  title,
  type = 'text',
  ...props
}: InputProps): JSX.Element => {
  const handleClickInfo = () => {
    if (question) {
      toast.info(question)
    }
  }

  return (
    <div className={s.wrapper_input}>
      <div className={s.wrap_input}>
        {title && <p className={s.title}>{title}</p>}
        <input value={value} className={cn(s.input, className)} type={type} {...props} />
      </div>
      {question && (
        <span className={s.question} onClick={handleClickInfo}>
          <SvgQuestion />
        </span>
      )}
    </div>
  )
}
