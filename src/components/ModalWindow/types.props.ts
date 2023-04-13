import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface ModalWindowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
  modal: boolean
  setModal: (val: boolean) => void
}
