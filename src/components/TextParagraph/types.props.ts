import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  type?: 'p1' | 'p2'
  children?: ReactNode
}
