import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import cn from 'classnames'

import { SvgDark, SvgLanguage, SvgLight } from 'assets/svg'
import { ImgUkrane, ImgUsa } from 'assets/image'
import { FooterComponent } from 'pages-components'
import { MainComponent, Button, ModalWindow } from 'components'
import { useAppDispatch, useAppSelector } from 'utils/hooks'
import { actionChangeTheme } from 'store/slice'
import { getTheme } from 'store/select'
import { languageType } from 'utils/types'

import styles from './styles.module.css'

export default function MainPage(): JSX.Element {
  const { t, i18n } = useTranslation(['main', 'error'])
  const dispatch = useAppDispatch()

  const user = localStorage.getItem('user')
  const theme = useAppSelector(getTheme)

  const [modalAccount, setModalAccount] = useState(false)
  const [modalRules, setModalRules] = useState(false)
  const [modalConnect, setModalConnect] = useState(false)

  const handleSelectLang = (lang: languageType) => {
    i18n.changeLanguage(lang === 'uk' ? 'en' : 'uk')
  }

  const handleClick = () => {
    if (!user) {
      toast.error(t('not_user', { ns: 'error' }))
    }
  }

  const handleChangeTheme = () => {
    dispatch(actionChangeTheme(!theme))
  }

  return (
    <>
      <MainComponent center={true}>
        <ul className={styles.menu}>
          <li>
            <Button className={cn()} notAllow={!user} onClick={handleClick}>
              {t('buttons.start')}
            </Button>
          </li>
          <li>
            <Button onClick={() => setModalConnect(true)}>{t('buttons.connect')}</Button>
          </li>
          <li>
            <Button onClick={() => setModalRules(true)}>{t('buttons.rules')}</Button>
          </li>
          <li>
            <Button onClick={() => setModalAccount(true)}>{t('buttons.account')}</Button>
          </li>
          <li className={styles.button_menu_small}>
            <button onClick={handleChangeTheme}>{theme ? <SvgDark /> : <SvgLight />}</button>
            <button onClick={() => handleSelectLang(i18n.language as languageType)}>
              <SvgLanguage />
              <img
                src={i18n.language === 'uk' ? ImgUkrane : ImgUsa}
                className={styles.label_language}
                alt={'country'}
              />
            </button>
          </li>
        </ul>
      </MainComponent>
      <ModalWindow modal={modalConnect} setModal={setModalConnect}>
        <ul></ul>
      </ModalWindow>
      <ModalWindow modal={modalRules} setModal={setModalRules}>
        <ul></ul>
      </ModalWindow>
      <ModalWindow modal={modalAccount} setModal={setModalAccount}>
        <ul></ul>
      </ModalWindow>
      <FooterComponent />
    </>
  )
}
