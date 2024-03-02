import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { GithubPicker } from 'react-color'
import { useOutsideClick } from 'utils/hooks'
import cn from 'classnames'

import s from './styles.module.css'
import { Input } from '../Input'

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
          colors={[
            '#58F3A8',
            '#2B53EB',
            '#E35B63',
            '#F5C651',
            '#8C70F7',
            '#EB2BE6',
            '#9FAFFF',
            '#FFAA2C',
            '#00CFFF',
            '#817919',
            '#DEE5D8',
            '#D80026',
            '#00523F',
            '#F9F871',
            '#402E32',
            '#FD8B7C',
            '#94A800',
            '#F7EBFF',
            '#48ADC2',
            '#3E31AD',
            '#008695',
          ]}
          onChangeComplete={() => setColor(false)}
          onChange={(color) => onChange && onChange({ target: { id, name, value: color.hex } })}
          className={cn(className, s.wrap_color)}
        />
      </div>
    </div>
  )
}
