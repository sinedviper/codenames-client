import React from 'react'
import cn from 'classnames'

import { SvgClose } from 'assets/svg'

import ModalWindowProps from './types.props'
import styles from './styles.module.css'

export function ModalWindow({
  modal,
  setModal,
  children,
  ...props
}: ModalWindowProps): JSX.Element {
  return (
    <div
      className={cn(styles.modal_wrap, {
        [styles.modal_wrap_active]: modal,
      })}
      {...props}
    >
      <div
        className={cn(styles.block_modal, {
          [styles.block_modal_active]: modal,
        })}
      >
        <div className={styles.block_close}>
          <button onClick={() => setModal(false)}>
            <SvgClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
