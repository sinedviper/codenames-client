import React from 'react'
import { useTranslation } from 'react-i18next'

import { FooterComponent } from 'pages-components'
import { MainComponent } from 'components'

import styles from './styles.module.css'

export default function MainPage(): JSX.Element {
  const { t } = useTranslation('main')

  return (
    <>
      <MainComponent center={true}>
        <ul>
          <li>
            <button>{t('buttons.start')}</button>
          </li>
          <li>
            <button>{t('buttons.connect')}</button>
          </li>
          <li>
            <button>{t('buttons.rules')}</button>
          </li>
          <li>
            <button>{t('buttons.account')}</button>
          </li>
        </ul>
      </MainComponent>
      <FooterComponent />
    </>
  )
}
