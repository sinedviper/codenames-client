import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface ContainerWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode
  color?: 'orange' | 'green' | 'purple' | 'blue' | 'none'
}
