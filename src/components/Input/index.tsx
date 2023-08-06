import React, { useState } from 'react'
import cn from 'classnames'

import InputProps from './types.props'
import s from './styles.module.css'
import { SvgArrow, SvgQuestion } from 'assets/svg'
import { toast } from 'react-toastify'

export const Input = ({
  id,
  name,
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

  const handleClickSelect = (): void => {
    setSelect(!select)
  }

  const typeVariant = (variant): JSX.Element | null => {
    switch (variant) {
      case 1: {
        if (typeof value === 'string' || value === undefined) {
          return (
            <input
              value={value ?? ''}
              className={cn(s.input, className)}
              type={'text'}
              {...props}
            />
          )
        } else {
          return null
        }
      }
      case 2: {
        if (typeof value === 'boolean' || value === undefined) {
          return (
            <input
              checked={value ?? false}
              className={cn(s.input, className)}
              type={'checkbox'}
              {...props}
            />
          )
        } else {
          return null
        }
      }
      case 3: {
        if (typeof value === 'number' || value === undefined) {
          return (
            <input
              value={value ?? undefined}
              className={cn(s.input, className)}
              type={'number'}
              {...props}
            />
          )
        } else {
          return null
        }
      }
      case 4: {
        const handleSave = (obj: { id: string; name: string }): void => {
          if (props.onChange) {
            props.onChange({
              target: { id: id ?? '', name: name ?? '', value: obj },
            })
            setSelect(false)
          }
        }
        if (typeof value === 'object' || value === undefined) {
          return (
            <div className={s.wrap_select} onMouseLeave={() => setSelect(false)}>
              <div className={s.select}>
                <p className={s.choose}>{value?.name}</p>
                <button className={s.btn} onClick={handleClickSelect}>
                  <SvgArrow />
                </button>
              </div>
              <div
                className={cn(s.select_show, {
                  [s.show_active]: select,
                })}
              >
                {list?.map((obj, key) => (
                  <div key={key} className={s.item_list} onClick={() => handleSave(obj)}>
                    {obj.name}
                  </div>
                ))}
              </div>
            </div>
          )
        } else {
          return null
        }
      }
      default: {
        if (typeof value === 'string' || value === undefined) {
          return (
            <input
              value={value ?? ''}
              className={cn(s.input, className)}
              type={'text'}
              {...props}
            />
          )
        } else {
          return null
        }
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
