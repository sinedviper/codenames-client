import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  strokeLine?: number
  strokeWidth?: number
}

export const OrbitAnimation = ({ strokeLine = 4, strokeWidth = 0.4, ...props }: Props) => {
  return (
    <section {...props}>
      <svg width='100%' height='100%' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
        <circle
          cx='100'
          cy='100'
          r='100'
          fill='none'
          stroke='var(--light)'
          strokeWidth={strokeWidth}
          strokeDasharray={strokeLine}
        />
      </svg>
    </section>
  )
}
