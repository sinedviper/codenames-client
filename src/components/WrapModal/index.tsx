import { createPortal } from 'react-dom'
import cn from 'classnames'
import { DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect, useState } from 'react'

import s from './styles.module.css'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode
  show?: boolean
}

export const WrapModal = ({ children, show, className, ...props }: Props): JSX.Element => {
  const [showWrap, setShowWrap] = useState(false)
  const [showWrapper, setShowWrapper] = useState(false)

  useEffect(() => {
    let timer1: any
    let timer2: any

    if (show) {
      setShowWrap(true)
      setShowWrapper(true)
    } else {
      timer1 = setTimeout(() => {
        setShowWrapper(false)
        timer2 = setTimeout(() => {
          setShowWrap(false)
        }, 300)
      }, 300)
    }

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [show])

  return (
    <>
      {(showWrap || showWrapper || show) &&
        createPortal(
          <div
            className={cn(s.wrap, {
              [s.wrap_active]: showWrap && show,
            })}
          >
            <div
              className={cn(className, s.wrapper, {
                [s.wrapper_active]: showWrapper && show,
              })}
              {...props}
            >
              {children}
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}
