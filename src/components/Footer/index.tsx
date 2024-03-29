import { useTranslation } from 'react-i18next'

import s from './styles.module.css'
import { TextParagraph } from '../TextParagraph'

export function Footer(): JSX.Element {
  const { t } = useTranslation('translate')

  return (
    <footer className={s.footer}>
      <TextParagraph type={'p2'}>
        &#xa9;{new Date().getFullYear() + ' ' + t('footer')} {import.meta.env.VITE_APP_VERSION}
      </TextParagraph>
    </footer>
  )
}
