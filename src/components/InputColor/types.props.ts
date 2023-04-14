import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface InputColorProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  colorChoose?: string
  setChange?: (e: any) => void
}
