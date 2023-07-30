import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface ContainerListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  children?: ReactNode
}
