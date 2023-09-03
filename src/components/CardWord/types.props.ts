import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface CardWordProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  word: { text: string; type: 'red' | 'blue' | 'black' | 'grey' }
  userType: boolean
}
