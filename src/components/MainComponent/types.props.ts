import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface MainProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
  center?: boolean
}
