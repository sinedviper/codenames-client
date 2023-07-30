import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface ContainerLiProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  children: ReactNode
}
