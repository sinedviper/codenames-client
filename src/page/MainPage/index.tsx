import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'

import { FooterComponent } from 'pages-components'
import {
  MainComponent,
  Button,
  ModalWindow,
  Input,
  Header2,
  InputColor,
  Header3,
  AvatarColor,
  ButtonTheme,
  ButtonLanguage,
} from 'components'
import { useAppDispatch, useAppSelector } from 'utils/hooks'
import { actionChangeUser } from 'store/slice'
import { getUser } from 'store/select'

import styles from './styles.module.css'

export default function MainPage(): JSX.Element {
  const { t } = useTranslation(['main', 'error', 'info'])
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const user = useAppSelector(getUser)

  const userHave = user.nickname !== ''

  const [modalAccount, setModalAccount] = useState(false)
  const [modalRules, setModalRules] = useState(false)
  const [modalConnect, setModalConnect] = useState(false)
  const [colorChoose, setColorChoose] = useState(userHave ? user.color : '#000')
  const [inputNickname, setIInputNickname] = useState(userHave ? user.nickname : '')
  const [connectValue, setConnectValue] = useState('')

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

  const handleChangeInput = (e) => {
    setIInputNickname(e.target.value)
  }

  const handleSaveUser = () => {
    if (validateInput(inputNickname, false) && colorChoose.trim() !== '') {
      dispatch(actionChangeUser({ nickname: inputNickname, color: colorChoose }))
      setModalAccount(false)
    }
  }

  const handleChangeColor = (e) => {
    setColorChoose(e.target.value)
  }

  const handleConnectGame = () => {
    if (validateInput(connectValue, true)) {
      navigate(`/${connectValue}`)
    }
  }

  function validateInput(input: string, check: boolean): boolean {
    const englishLettersRegex = /^[a-zA-Z0-9]+$/
    if (!input) {
      toast.error(t('input_null', { ns: 'error' }))
      return false
    } else if (!check && input.length > 25) {
      toast.error(t('input_large_25', { ns: 'error' }))
      return false
    } else if (check && input.length !== 10) {
      toast.error(t('input_large_10', { ns: 'error' }))
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
        <div className={styles.menu}>
          <Button notAllow={!userHave} onClick={handleClickStart}>
            {t('buttons.start')}
          </Button>
          <Button onClick={handleClickConnect} notAllow={!userHave}>
            {t('buttons.connect')}
          </Button>
          <Button onClick={handleClickRules}>{t('buttons.rules')}</Button>
          <Button onClick={handleClickAccount}>
            {userHave ? user.nickname : t('buttons.account')}
          </Button>
          <div className={styles.button_menu_small}>
            <ButtonTheme />
            <ButtonLanguage />
          </div>
        </div>
      </MainComponent>
      <ModalWindow modal={modalConnect} setModal={setModalConnect}>
        <Header2>{t('connect.title')}</Header2>
        <Input
          question={String(t('info_connect_code', { ns: 'info' }))}
          value={connectValue}
          onChange={(e: any) => setConnectValue(e.target.value)}
          placeholder={String(t('connect.placeholder'))}
        />
        <Button onClick={handleConnectGame} color={'warning'}>
          {t('connect.button')}
        </Button>
      </ModalWindow>
      <ModalWindow modal={modalRules} setModal={setModalRules}>
        nope
      </ModalWindow>
      <ModalWindow modal={modalAccount} setModal={setModalAccount}>
        <AvatarColor nickname={inputNickname} size={'xl'} color={colorChoose} />
        <Header3>{t('account.titlenick')}</Header3>
        <Input
          value={inputNickname}
          onChange={handleChangeInput}
          placeholder={String(t('account.placeholder'))}
        />
        <Header3>{t('account.titlecolor')}</Header3>
        <InputColor value={colorChoose} setChange={handleChangeColor} />
        <Button onClick={handleSaveUser} color={'warning'}>
          {t('account.button')}
        </Button>
      </ModalWindow>
      <FooterComponent />
    </>
  )
}
