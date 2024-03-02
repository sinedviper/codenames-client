import DatePicker from 'react-date-picker'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
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
      className={cn(className)}
      onChange={(value) => onChange && onChange({ target: { id, name, value: `${value ?? ''}` } })}
      value={value}
      calendarIcon={<SvgCalendar />}
      clearIcon={
        <SvgClose
          className={cn({
            [s.svg_none]: value?.trim() === '',
          })}
        />
      }
      disabled={disabled}
    />
  )
}
