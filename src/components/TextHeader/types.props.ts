import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  type?: 'h1' | 'h2' | 'h3'
  children?: ReactNode
}
