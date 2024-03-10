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
  error?: string
}

export const InputDate = ({
  id,
  name,
  value,
  onChange,
  className,
  disabled,
  error,
  onBlur,
}: Props): JSX.Element => {
  return (
    <DatePicker
      id={id}
      name={name}
      className={cn(className, {
        [s.input_error]: !!error,
      })}
      onChange={(value) => onChange && onChange({ target: { id, name, value: `${value ?? ''}` } })}
      value={value}
      onBlur={onBlur}
      calendarIcon={<SvgCalendar className={cn({ [s.wrap_svg_error]: !!error })} />}
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
