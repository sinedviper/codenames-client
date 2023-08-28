import { DetailedHTMLProps, HTMLAttributes } from 'react'

export default interface BlobProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  colorBlob: { first: string; second: string }
}
