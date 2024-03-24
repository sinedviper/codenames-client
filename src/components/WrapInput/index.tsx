import cn from 'classnames'

import s from './styles.module.css'
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { TextParagraph } from 'components'
import { useTranslation } from 'react-i18next'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  error?: string
  children?: ReactNode
  label?: string
}

export const WrapInput = ({ children, error, className, label }: Props): JSX.Element => {
  const { t } = useTranslation('translate')
  return (
    <div className={cn(className, s.wrap_inputs)}>
      {label && (
        <TextParagraph type={'p3'} className={s.text_title}>
          {t(label)}
        </TextParagraph>
      )}
      {children}
      {error && (
        <TextParagraph type={'p3'} className={s.text_bottom}>
          {t(error)}
        </TextParagraph>
      )}
    </div>
  )
}
