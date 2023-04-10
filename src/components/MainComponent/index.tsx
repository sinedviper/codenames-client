import React from 'react'
import cn from 'classnames'

import { MainProps } from './types.props'
import styles from './styles.module.css'

export default function MainComponent({ center, children, ...props }: MainProps): JSX.Element {
  return (
    <main
      className={cn(styles.main, {
        [styles.main_centur]: center,
      })}
      {...props}
    >
      {children}
    </main>
  )
}
