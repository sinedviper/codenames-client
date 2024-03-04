import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import cn from 'classnames'

import { SvgSpinner, SvgWarn } from 'assets/svg'

import s from './styles.module.css'
import { TextParagraph } from '../TextParagraph'
import { useTranslation } from 'react-i18next'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src?: string
  alt?: string
}

export const Img = ({ src, alt = 'picture', ...props }: Props) => {
  const { t } = useTranslation('translate')

  const [load, setLoad] = useState(true)
  const [error, setError] = useState(false)

  return (
    <div className={s.wrap_img}>
      <img
        className={s.img}
        src={src}
        alt={alt}
        onLoad={() => setLoad(false)}
        onError={() => setError(true)}
        {...props}
      />
      <div
        className={cn(s.wrap_load, {
          [s.wrap_load_disable]: !load,
        })}
      >
        <SvgSpinner />
      </div>
      <div
        className={cn(s.wrap_error, {
          [s.wrap_error_active]: error,
        })}
      >
        <div className={s.wrap_svg}>
          <SvgWarn />
        </div>
        <TextParagraph className={s.text_error} type={'p2'}>
          {t('downloaderror')}
        </TextParagraph>
      </div>
    </div>
  )
}
