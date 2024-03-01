import DatePicker from 'react-date-picker'
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import cn from 'classnames'

import { SvgCalendar, SvgClose } from 'assets/svg'

import s from './styles.module.css'

interface Props
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'> {
  id?: string
  name?: string
  value?: string | null
  onChange?: (value: { target: { id?: string; name?: string; value: string | null } }) => void
  disabled?: boolean
}

export const InputDate = ({
  id,
  name,
  value,
  onChange,
  className,
  disabled,
}: Props): JSX.Element => {
  return (
    <DatePicker
      id={id}
      name={name}
      className={cn(className, s.wrap_input)}
      calendarClassName={s.wrap_calendar}
      tileClassName={s.tile_wrap}
      onChange={(value) => onChange && onChange({ target: { id, name, value: `${value ?? ''}` } })}
      value={value}
      calendarIcon={<SvgCalendar className={cn(s.svg_btn)} />}
      clearIcon={
        <SvgClose
          className={cn(s.svg_btn, {
            [s.svg_none]: value?.trim() === '',
          })}
        />
      }
      disabled={disabled}
    />
  )
}
