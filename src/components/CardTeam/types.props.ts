import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface CardTeamProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  users?: { name: string }[] | null
  listAnswer?: string[] | null
  team?: 'red' | 'blue'
  leader?: string
}
