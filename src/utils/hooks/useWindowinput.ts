import { CSSProperties, MutableRefObject, useState } from 'react'
import { autoUpdate, FloatingContext, ReferenceType, useFloating } from '@floating-ui/react'

interface IUseWindowInput {
  showWindow: boolean
  showStyle: boolean
  toggleWindow: () => void
  hideWindow: () => void
  floatingStyles: CSSProperties
  context: FloatingContext
  refs: {
    reference: MutableRefObject<ReferenceType | null>
    floating: MutableRefObject<HTMLElement | null>
    setReference: (node: ReferenceType | null) => void
    setFloating: (node: HTMLElement | null) => void
  }
}

export const useWindowInput = (): IUseWindowInput => {
  const [windowCreate, setWindowCreate] = useState<boolean>(false)
  const [windowOpen, setWindowOpen] = useState<boolean>(false)

  const { refs, floatingStyles, context } = useFloating({
    whileElementsMounted: autoUpdate,
    middleware: [],
    open: windowCreate,
  })

  const hideWindow = () => {
    setWindowOpen(false)
    setTimeout(() => setWindowCreate(false), 300)
  }

  const toggleWindow = () => {
    if (windowCreate) {
      hideWindow()
    } else {
      setWindowCreate(true)
      setTimeout(() => setWindowOpen(true), 0)
    }
  }

  return {
    refs,
    floatingStyles,
    showWindow: windowCreate || windowOpen,
    showStyle: windowOpen,
    toggleWindow,
    hideWindow,
    context,
  }
}
