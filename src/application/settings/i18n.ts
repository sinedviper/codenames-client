import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { resources } from 'utils/contastants'
import { languageType } from 'utils/types'

function languageDefault(): languageType {
  const languageSystem = navigator.language.split('').slice(0, 2).join('')

  switch (languageSystem) {
    case 'uk': {
      return 'uk'
    }
    default: {
      return 'en'
    }
  }
}

if (localStorage.getItem('i18nextLng') === null) {
  localStorage.setItem('i18nextLng', languageDefault())
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'uk',
    resources,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
