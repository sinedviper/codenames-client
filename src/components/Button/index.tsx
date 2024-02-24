import cn from 'classnames'

import { TextParagraph } from '../TextParagraph'
import Props from './types.props'
import s from './styles.module.css'
import { SoundClick } from '../../assets/sounds'

export const Button = ({
  className,
  variant,
  disabled,
  text,
  icon,
  type = 'button',
  children,
  ...props
}: Props): JSX.Element => {
  const handleClick = () => {
    const audio = new Audio(SoundClick)
    audio.play()
  }

  return (
    <button
      className={cn(className, s.button, {
        [s.btn_gradient]: variant === 'gradient',
        [s.btn_none]: variant === 'none',
      })}
      type={type}
      disabled={disabled}
      onMouseDown={handleClick}
      onTouchStart={handleClick}
      {...props}
    >
      {children}
      {text && (
        <TextParagraph type={'p2'} className={s.text}>
          {text}
        </TextParagraph>
      )}
      {icon && <div className={s.svg}>{icon}</div>}
    </button>
  )
}
