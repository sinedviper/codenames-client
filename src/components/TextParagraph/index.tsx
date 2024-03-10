import cn from 'classnames'

import Props from './types.props.ts'
import s from './styles.module.css'

export const TextParagraph = ({ className, children, type, ...props }: Props): JSX.Element => {
  return (
    <p
      className={cn(className, s.paragraph, {
        [s.paragraph_2]: type === 'p2',
        [s.paragraph_3]: type === 'p3',
      })}
      {...props}
    >
      {children}
    </p>
  )
}
