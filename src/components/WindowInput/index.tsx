import cn from 'classnames'
import s from './styles.module.css'
import { CSSProperties, ForwardedRef, forwardRef, ReactNode } from 'react'
import { useOutsideClick } from 'utils/hooks'
import { FloatingContext, FloatingFocusManager, FloatingPortal } from '@floating-ui/react'

interface Props {
  children?: ReactNode
  isShow: boolean
  hideWindow: () => void
  className?: string
  cssProperty: CSSProperties
  context: FloatingContext
  isShowWindow: boolean
}

export const WindowInput = forwardRef(
  (
    { children, isShow, hideWindow, className, cssProperty, context, isShowWindow }: Props,
    ref?: ForwardedRef<HTMLDivElement>,
  ): JSX.Element | null => {
    const regWindowInput = useOutsideClick<HTMLDivElement>(hideWindow)
    return isShowWindow ? (
      <FloatingPortal>
        <FloatingFocusManager context={context} modal={false}>
          <div className={s.wrapper} ref={ref} style={cssProperty}>
            <div
              ref={regWindowInput}
              className={cn(className, s.wrap_select, {
                [s.wrap_select_active]: isShow,
              })}
            >
              {children}
            </div>
          </div>
        </FloatingFocusManager>
      </FloatingPortal>
    ) : null
  },
)
