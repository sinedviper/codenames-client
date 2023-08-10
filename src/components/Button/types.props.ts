import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface ButtonsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
  color?: 'orange' | 'pink' | 'purple' | 'blue' | 'green' | 'yellow'
  disabled?: boolean
}
