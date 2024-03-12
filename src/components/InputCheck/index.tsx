import { DetailedHTMLProps, HTMLAttributes } from 'react'
import cn from 'classnames'

import s from './styles.module.css'
import { TextParagraph } from 'components'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  value?: boolean
  classNameWrap?: string
  label?: string
}

export const InputCheck = ({
  classNameWrap,
  label,
  className,
  value,
  ...props
}: Props): JSX.Element => {
  return (
    <div className={cn(classNameWrap, s.wrap_input)}>
      <input
        type={'checkbox'}
        className={cn(className, s.input_check)}
        checked={value}
        {...props}
      />
      <TextParagraph type={'p1'}>{label}</TextParagraph>
    </div>
  )
}
