import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface InputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  value?: string
  question?: string
  title?: string
  variant: 1 | 2 | 3 | 4
  list?: { id: number; name: string }[]
}
