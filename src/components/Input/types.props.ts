import { DetailedHTMLProps, HTMLAttributes } from 'react'

type input =
  | {
      value?: string
      question?: string
      title?: string
      variant: 1
    }
  | {
      value?: string
      question?: string
      title?: string
      variant: 2
    }
  | {
      value?: string
      question?: string
      title?: string
      variant: 3
    }
  | {
      value?: { id: number; name: string }
      question?: string
      title?: string
      variant: 4
      list?: { id: number; name: string }[]
    }

export default interface InputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id?: string
  name?: string
  value: undefined | boolean | number | string | { id: number; name: string }
  question?: string
  title?: string
  variant: 1 | 2 | 3 | 4
  list?: { id: number; name: string }[]
}
// onChange?: (val: { target: { id?: string; name?: string; value: any } }) => void
