import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface Header3Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  children: ReactNode
}
