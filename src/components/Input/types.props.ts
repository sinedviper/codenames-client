import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface InputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  value?: string
  question?: string
}
