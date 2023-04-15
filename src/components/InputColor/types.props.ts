import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface InputColorProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  setChange?: (e: any) => void
  value?: string
}
