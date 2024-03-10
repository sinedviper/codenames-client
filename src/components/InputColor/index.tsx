import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { GithubPicker } from 'react-color'
import cn from 'classnames'

import { colors } from 'utils/contastants'
import { useOutsideClick } from 'utils/hooks'

import { Input } from '../Input'
import s from './styles.module.css'

interface Props
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'> {
  value?: string
  name?: string
  id?: string
  onChange?: (value: { target: { id?: string; name?: string; value: string | null } }) => void
}

export const InputColor = ({
  className,
  placeholder,
  onChange,
  id,
  name,
  value,
  ...props
}: Props): JSX.Element => {
  const [color, setColor] = useState(false)

  const refBlock = useOutsideClick<HTMLDivElement>(() => setColor(false))

  return (
    <div className={s.wrapper_color}>
      <Input
        placeholder={placeholder}
        type={'color'}
        disabled={true}
        value={value}
        clickBtn={() => setColor(!color)}
        {...props}
      />
      <div
        className={cn(s.color_comp, {
          [s.color_comp_active]: color,
        })}
        ref={refBlock}
      >
        <GithubPicker
          width={'188px'}
          colors={colors}
          onChangeComplete={() => setColor(false)}
          onChange={(color) => onChange && onChange({ target: { id, name, value: color.hex } })}
          className={cn(className, s.wrap_color)}
        />
      </div>
    </div>
  )
}
