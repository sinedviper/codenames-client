import {
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

type TProp = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'onChange' | 'onBlur' | 'ref'
> & {
  className?: string
  maxLength?: number
  minLength?: number
  disabled?: boolean
  clickBtn?: () => void
  error?: string
  name?: string
  btn?: ReactNode
  handleBtn?: () => void
  onBlur?: (value?: FocusEvent<HTMLInputElement>) => void
  placeholder?: string
  id?: string
}

type TInputString = TProp & {
  type?: 'text' | 'password' | 'color'
  value?: string
  defaultValue?: string
  onChange?: (value?: { target: { id?: string; name?: string; value: string } }) => void
}

type TInputNumber = TProp & {
  type?: 'number'
  value?: number
  defaultValue?: number
  onChange?: (value?: { target: { id?: string; name?: string; value: string } }) => void
}

type Props = TInputString | TInputNumber

export const Input = forwardRef(
  (
    {
      className,
      clickBtn,
      value,
      type,
      error,
      name,
      btn,
      handleBtn,
      placeholder,
      onBlur,
      maxLength,
      minLength,
      onChange,
      disabled,
      id,
      defaultValue,
      onClick,
      ...props
    }: Props,
    ref?: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    const [password, setPassword] = useState(false)

    return (
      <div className={s.wrap_input} onClick={onClick}>
        <input
          id={id}
          defaultValue={defaultValue}
          ref={ref}
          name={name}
          type={type === 'password' ? (password ? 'text' : 'password') : type}
          className={cn(className, s.input, {
            [s.input_pass]: type == 'password' || type === 'color' || btn,
            [s.input_error]: !!error,
          })}
          onBlur={onBlur}
          onChange={onChange}
          disabled={disabled}
          maxLength={maxLength}
          minLength={minLength}
          value={value}
          placeholder={placeholder}
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
