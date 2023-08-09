import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface ContainerWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode
  show: boolean
}
