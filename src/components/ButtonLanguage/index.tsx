import React from 'react'
import cn from 'classnames'

import { SvgLanguage } from 'assets/svg'
import { ImgUkrane, ImgUsa } from 'assets/image'
import { useTranslation } from 'react-i18next'
import { languageType } from 'utils/types'

import ButtonLanguageProps from './types.props'
import styles from './styles.module.css'

export const ButtonLanguage = ({ className, ...props }: ButtonLanguageProps): JSX.Element => {
  const { i18n } = useTranslation()

  const handleSelectLang = (lang: languageType) => {
    i18n.changeLanguage(lang === 'uk' ? 'en' : 'uk')
  }

  return (
    <button
      className={cn(styles.button, className)}
      onClick={() => handleSelectLang(i18n.language as languageType)}
      {...props}
    >
      <SvgLanguage />
      <img
        src={i18n.language === 'uk' ? ImgUkrane : ImgUsa}
        className={styles.label}
        alt={'country'}
      />
    </button>
  )
}
