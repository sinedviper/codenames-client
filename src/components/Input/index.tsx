import React, { useState } from 'react'
import cn from 'classnames'

import InputProps from './types.props'
import s from './styles.module.css'
import { SvgArrow, SvgQuestion } from 'assets/svg'
import { toast } from 'react-toastify'

export const Input = ({
  value,
  question,
  className,
  title,
  variant,
  list,
  ...props
}: InputProps): JSX.Element => {
  const [select, setSelect] = useState(false)

  const handleClickInfo = () => {
    if (question) {
      toast.info(question)
    }
  }

  const typeVariant = (variant): JSX.Element => {
    switch (variant) {
      case 1: {
        return <input value={value} className={cn(s.input, className)} type={'text'} {...props} />
      }
      case 2: {
        return (
          <input value={value} className={cn(s.input, className)} type={'checkbox'} {...props} />
        )
      }
      case 3: {
        return <input value={value} className={cn(s.input, className)} type={'number'} {...props} />
      }
      case 4: {
        return (
          <div className={s.wrap_select}>
            <div className={s.select}>
              <p className={s.choose}>{value}</p>
              <button className={s.btn}>
                <SvgArrow />
              </button>
            </div>
            <div
              className={cn(s.select_show, {
                [s.show_active]: select,
              })}
            >
              {list?.map((obj, key) => (
                <div key={key}>{obj.name}</div>
              ))}
            </div>
          </div>
        )
      }
      default: {
        return <input value={value} className={cn(s.input, className)} type={'text'} {...props} />
      }
    }
  }

  return (
    <div className={s.wrapper_input}>
      <div
        className={cn(s.wrap_input, {
          [s.variant_2]: variant === 2,
        })}
      >
        {title && <p className={s.title}>{title}</p>}
        {typeVariant(variant)}
      </div>
      {question && (
        <span className={s.question} onClick={handleClickInfo}>
          <SvgQuestion />
        </span>
      )}
    </div>
  )
}
