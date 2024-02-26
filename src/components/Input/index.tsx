import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import cn from 'classnames'

import { SvgEye } from 'assets/svg'
import { Button } from 'components'

import s from './styles.module.css'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type?: 'text' | 'password'
}

export const Input = ({ className, type, ...props }: Props): JSX.Element => {
  const [password, setPassword] = useState(false)

  return (
    <div className={s.wrap_input}>
      <input
        type={type === 'password' ? (password ? 'text' : 'password') : type}
        className={cn(className, s.input, {
          [s.input_pass]: type == 'password',
        })}
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
      ) : null}
    </div>
  )
}
