import React from 'react'
import cn from 'classnames'

import AvatarColorProps from './types.props'
import styles from './styles.module.css'

export const AvatarColor = ({
  color,
  size,
  nickname,
  className,
  ...props
}: AvatarColorProps): JSX.Element => {
  return (
    <div
      className={cn(styles.avatar, {
        [styles.avatar_xl]: size === 'xl',
      })}
      style={{ background: color }}
      {...props}
    >
      {nickname[0]}
    </div>
  )
}
