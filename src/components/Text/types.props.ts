import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface TextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode
}
