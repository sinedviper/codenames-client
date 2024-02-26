import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  colorBlob: { first: string; second: string }
}

export const BlobAnimation = ({ className, colorBlob, id }: Props): JSX.Element => {
  return (
    <div className={className}>
      <svg
        viewBox='0 0 500 500'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        width='100%'
        id='blobSvg'
      >
        <defs>
          <linearGradient id={id} x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop
              offset='0%'
              style={{ stopColor: `var(${colorBlob.first})`, transition: 'var(--transition)' }}
            ></stop>
            <stop
              offset='100%'
              style={{ stopColor: `var(${colorBlob.second})`, transition: 'var(--transition)' }}
            ></stop>
          </linearGradient>
        </defs>
        <path fill={`url(#${id})`}>
          <animate
            attributeName='d'
            dur='13000ms'
            repeatCount='indefinite'
            values='M451.5,299Q420,348,383.5,383Q347,418,298.5,441.5Q250,465,198,447.5Q146,430,111,390Q76,350,44.5,300Q13,250,47.5,201.5Q82,153,111.5,107.5Q141,62,195.5,57Q250,52,297,69.5Q344,87,392.5,113.5Q441,140,462,195Q483,250,451.5,299Z;
                            M455.5,306Q444,362,400,398Q356,434,303,456.5Q250,479,202,448Q154,417,104,390Q54,363,48.5,306.5Q43,250,52,195.5Q61,141,99.5,98.5Q138,56,194,59.5Q250,63,308,56.5Q366,50,394.5,100Q423,150,445,200Q467,250,455.5,306Z;
                            M471,306.5Q445,363,401.5,400Q358,437,304,452.5Q250,468,203,440.5Q156,413,100.5,391Q45,369,52.5,309.5Q60,250,73.5,203Q87,156,123,124.5Q159,93,204.5,55.5Q250,18,311,28Q372,38,415,84Q458,130,477.5,190Q497,250,471,306.5Z;
                            M438,300Q422,350,385.5,386Q349,422,299.5,451Q250,480,193.5,462.5Q137,445,104,399Q71,353,39,301.5Q7,250,37.5,197.5Q68,145,97,89.5Q126,34,188,18.5Q250,3,300,40Q350,77,389,112Q428,147,441,198.5Q454,250,438,300Z;
                            M459.5,309.5Q456,369,402,394.5Q348,420,299,459Q250,498,198.5,463.5Q147,429,94.5,399.5Q42,370,40,310Q38,250,62.5,203Q87,156,119,117.5Q151,79,200.5,53.5Q250,28,312,31.5Q374,35,394.5,95Q415,155,439,202.5Q463,250,459.5,309.5Z;
                            M451.5,299Q420,348,383.5,383Q347,418,298.5,441.5Q250,465,198,447.5Q146,430,111,390Q76,350,44.5,300Q13,250,47.5,201.5Q82,153,111.5,107.5Q141,62,195.5,57Q250,52,297,69.5Q344,87,392.5,113.5Q441,140,462,195Q483,250,451.5,299Z'
          ></animate>
        </path>
      </svg>
    </div>
  )
}
