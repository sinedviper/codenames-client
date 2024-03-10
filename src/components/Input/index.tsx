import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import cn from 'classnames'

import { SvgEye, SvgPaintcan } from 'assets/svg'
import { Button } from 'components'

import s from './styles.module.css'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type?: 'text' | 'password' | 'color'
  maxLength?: number
  minLength?: number
  disabled?: boolean
  clickBtn?: () => void
  value?: string
  error?: string
}

export const Input = ({
  className,
  clickBtn,
  value,
  type,
  error,
  ...props
}: Props): JSX.Element => {
  const [password, setPassword] = useState(false)

  return (
    <div className={s.wrap_input}>
      <input
        type={type === 'password' ? (password ? 'text' : 'password') : type}
        className={cn(className, s.input, {
          [s.input_pass]: type == 'password',
          [s.input_error]: !!error,
        })}
        value={value}
        {...props}
      />
      {type == 'password' ? (
        <Button variant={'none'} onClick={() => setPassword(!password)} className={s.wrap_svg}>
          {password ? (
            <div className={s.svg_close}>
              <SvgEye />
              <span className={s.line_close} />
            </div>
          ) : (
            <SvgEye />
          )}
        </Button>
      ) : type == 'color' ? (
        <Button variant={'none'} onClick={() => clickBtn && clickBtn()} className={s.wrap_svg}>
          <SvgPaintcan />
        </Button>
      ) : null}
    </div>
  )
}
