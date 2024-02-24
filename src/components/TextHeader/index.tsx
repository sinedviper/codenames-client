import cn from 'classnames'

import Props from './types.props.ts'
import s from './styles.module.css'

export const TextHeader = ({ type, className, children, ...props }: Props): JSX.Element => {
  if (type === 'h3') {
    return (
      <h3 className={cn(className, s.header3)} {...props}>
        {children}
      </h3>
    )
  }

  if (type === 'h2') {
    return (
      <h2 className={cn(className, s.header2)} {...props}>
        {children}
      </h2>
    )
  }

  return (
    <h1 className={cn(className, s.header1)} {...props}>
      {children}
    </h1>
  )
}
