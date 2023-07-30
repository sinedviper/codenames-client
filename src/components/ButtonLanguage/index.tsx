import React from 'react'
import cn from 'classnames'

import { SvgLanguage } from 'assets/svg'
import { ImgUkrane, ImgUsa } from 'assets/image'
import { useTranslation } from 'react-i18next'
import { languageType } from 'utils/types'

import ButtonLanguageProps from './types.props'
import s from './styles.module.css'

export const ButtonLanguage = ({ className, ...props }: ButtonLanguageProps): JSX.Element => {
  const { i18n } = useTranslation()

  const handleSelectLang = (lang: languageType) => {
    i18n.changeLanguage(lang === 'uk' ? 'en' : 'uk')
  }

  const getLanguage = (lang: languageType) => {
    return lang === 'uk' ? 'УКР' : 'ENG'
  }

  return (
    <button
      className={cn(s.button, className)}
      onClick={() => handleSelectLang(i18n.language as languageType)}
      {...props}
    >
      <p className={s.language_text}>{getLanguage(i18n.language as languageType)}</p>
    </button>
  )
}
