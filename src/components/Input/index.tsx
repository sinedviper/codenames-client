import {
  ChangeEvent,
  DetailedHTMLProps,
  FocusEvent,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useState,
} from 'react'
import cn from 'classnames'

import { SvgEye, SvgPaintcan } from 'assets/svg'
import { Button } from 'components'

import s from './styles.module.css'

interface Props
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'onChange' | 'onBlur' | 'ref'
  > {
  type?: 'text' | 'password' | 'color'
  maxLength?: number
  minLength?: number
  disabled?: boolean
  clickBtn?: () => void
  value?: string
  error?: string
  name?: string
  btn?: ReactNode
  handleBtn?: () => void
  onChange?: (value?: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (value?: FocusEvent<HTMLInputElement>) => void
}

export const Input = forwardRef(
  (
    { className, clickBtn, value, type, error, name, btn, handleBtn, ...props }: Props,
    ref?: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    const [password, setPassword] = useState(false)

    return (
      <div className={s.wrap_input}>
        <input
          ref={ref}
          name={name}
          type={type === 'password' ? (password ? 'text' : 'password') : type}
          className={cn(className, s.input, {
            [s.input_pass]: type == 'password' || type === 'color' || btn,
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
        ) : btn ? (
          <Button variant={'none'} onClick={() => handleBtn && handleBtn()} className={s.wrap_svg}>
            {btn}
          </Button>
        ) : null}
      </div>
    )
  },
)
