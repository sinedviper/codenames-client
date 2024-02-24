import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'none' | 'gradient'
  disabled?: boolean
  text?: string
  icon?: ReactNode
  children?: ReactNode
  type?: 'button' | 'submit'
}
