import { DetailedHTMLProps, FocusEvent, HTMLAttributes } from 'react'
import cn from 'classnames'

import { TextParagraph } from 'components'

import s from './styles.module.css'

interface Props
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'> {
  value?: boolean
  classNameWrap?: string
  label?: string
  onChange?: (value?: { target: { id?: string; name?: string; value: boolean } }) => void
  name?: string
  error?: string
  onBlur?: (value?: FocusEvent<HTMLInputElement>) => void
}

export const InputCheck = ({
  id,
  name,
  classNameWrap,
  label,
  className,
  value,
  onChange,
  error,
  onBlur,
  ...props
}: Props): JSX.Element => {
  return (
    <div className={cn(classNameWrap, s.wrap_input)}>
      <input
        id={id}
        name={name}
        type={'checkbox'}
        className={cn(className, s.input_check, {
          [s.input_error]: error,
        })}
        onBlur={onBlur}
        checked={value}
        onChange={(e) => onChange && onChange({ target: { id, name, value: e.target.checked } })}
        {...props}
      />
      <TextParagraph type={'p1'}>{label}</TextParagraph>
    </div>
  )
}
