import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import cn from 'classnames'

import { SvgDark, SvgLanguage, SvgLight } from 'assets/svg'
import { ImgUkrane, ImgUsa } from 'assets/image'
import { FooterComponent } from 'pages-components'
import { MainComponent, Button, ModalWindow, Input, Header2, InputColor, Header3 } from 'components'
import { useAppDispatch, useAppSelector } from 'utils/hooks'
import { actionChangeTheme, actionChangeUser } from 'store/slice'
import { getTheme, getUser } from 'store/select'
import { languageType } from 'utils/types'

import styles from './styles.module.css'

export default function MainPage(): JSX.Element {
  const { t, i18n } = useTranslation(['main', 'error'])
  const dispatch = useAppDispatch()

  const user = useAppSelector(getUser)
  const theme = useAppSelector(getTheme)

  const userHave = user.nickname !== ''

  const [modalAccount, setModalAccount] = useState(false)
  const [modalRules, setModalRules] = useState(false)
  const [modalConnect, setModalConnect] = useState(false)
  const [colorChoose, setColorChoose] = useState(userHave ? user.color : '#000')
  const [inputNickname, setIInputNickname] = useState(userHave ? user.nickname : '')

  const handleSelectLang = (lang: languageType) => {
    i18n.changeLanguage(lang === 'uk' ? 'en' : 'uk')
  }

  const handleClickStart = () => {
    if (!userHave) {
      toast.error(t('not_user', { ns: 'error' }))
    }
  }

  const handleClickConnect = () => {
    if (!userHave) {
      toast.error(t('not_user', { ns: 'error' }))
    } else {
      setModalConnect(true)
    }
  }

  const handleClickAccount = () => {
    setModalAccount(true)
  }

  const handleClickRules = () => {
    setModalRules(true)
  }

  const handleChangeTheme = () => {
    dispatch(actionChangeTheme(!theme))
  }

  const handleChangeInput = (e) => {
    setIInputNickname(e.target.value)
  }

  const handleSaveUser = () => {
    if (validateInput(inputNickname) && colorChoose.trim() !== '') {
      dispatch(actionChangeUser({ nickname: inputNickname, color: colorChoose }))
      setModalAccount(false)
    }
  }

  function validateInput(input: string): boolean {
    const englishLettersRegex = /^[a-zA-Z0-9]+$/
    if (!input) {
      toast.error(t('input_null', { ns: 'error' }))
      return false
    } else if (input.length > 25) {
      toast.error(t('input_large_25', { ns: 'error' }))
      return false
    } else if (!englishLettersRegex.test(input)) {
      toast.error(t('input_english_check', { ns: 'error' }))
      return false
    } else {
      return true
    }
  }

  return (
    <>
      <MainComponent center={true}>
        <ul className={styles.menu}>
          <li>
            <Button notAllow={!userHave} onClick={handleClickStart}>
              {t('buttons.start')}
            </Button>
          </li>
          <li>
            <Button onClick={handleClickConnect} notAllow={!userHave}>
              {t('buttons.connect')}
            </Button>
          </li>
          <li>
            <Button onClick={handleClickRules}>{t('buttons.rules')}</Button>
          </li>
          <li>
            <Button onClick={handleClickAccount}>
              {userHave ? user.nickname : t('buttons.account')}
            </Button>
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
        <Header2>{t('connect.title')}</Header2>
        <Input placeholder={String(t('connect.placeholder'))} />
        <Button color={'warning'}>{t('connect.button')}</Button>
      </ModalWindow>
      <ModalWindow modal={modalRules} setModal={setModalRules}>
        nope
      </ModalWindow>
      <ModalWindow modal={modalAccount} setModal={setModalAccount}>
        <div className={styles.nickname_circle} style={{ background: colorChoose }}>
          {inputNickname[0]?.toUpperCase()}
        </div>
        <Header3>{t('account.titlenick')}</Header3>
        <Input
          value={inputNickname}
          onChange={handleChangeInput}
          placeholder={String(t('account.placeholder'))}
        />
        <Header3>{t('account.titlecolor')}</Header3>
        <InputColor
          color={userHave ? user.color : '#000'}
          setChange={(e: any) => setColorChoose(e.target.value)}
        />
        <Button onClick={handleSaveUser} color={'warning'}>
          {t('account.button')}
        </Button>
      </ModalWindow>
      <FooterComponent />
    </>
  )
}
