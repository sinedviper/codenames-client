import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface Header2Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  children: ReactNode
}
