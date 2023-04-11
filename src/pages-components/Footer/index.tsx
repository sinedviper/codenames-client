import React from 'react'
import { useTranslation } from 'react-i18next'

import styles from './styles.module.css'

export default function Footer(): JSX.Element {
  const { t } = useTranslation('footer')

  return (
    <footer className={styles.footer}>
      <p>&#xa9;{new Date().getFullYear() + ' ' + t('paragraph1')}</p>
      <p>{t('paragraph2')}</p>
    </footer>
  )
}
