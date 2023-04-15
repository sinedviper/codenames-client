import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface AvatarColorProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  nickname: string
  size: 'xs' | 's' | 'm' | 'l' | 'xl'
  color: string
}
