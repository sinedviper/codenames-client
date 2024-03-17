import cn from 'classnames'

import s from './styles.module.css'
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isShow: boolean
  children: ReactNode
  mainChildren: ReactNode
}

export const WrapShowRelative = ({ isShow, children, mainChildren, ...props }: Props) => {
  return (
    <div className={s.wrapper_relative}>
      {mainChildren}
      <div
        className={cn(s.wrapper_show, {
          [s.wrapper_show_active]: isShow,
        })}
        {...props}
      >
        <div
          className={cn(s.wrap_show, {
            [s.wrap_show_active]: isShow,
          })}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
