import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { MainComponent, Button, ButtonTheme, ButtonLanguage } from 'components'
import { ModalWrapper } from 'pages-components'
import { useAppSelector } from 'utils/hooks'
import { getUser } from 'store/select'

import s from './styles.module.css'

export default function MainPage(): JSX.Element {
  const { t } = useTranslation(['main', 'error'])

  const user = useAppSelector(getUser)

  const userHave = user.nickname !== ''

  const [modalAccount, setModalAccount] = useState(false)
  const [modalRules, setModalRules] = useState(false)
  const [modalConnect, setModalConnect] = useState(false)
  const [modalStart, setModalStart] = useState(false)

  const modalWrapperConst = {
    modalAccount,
    setModalAccount,
    modalRules,
    setModalRules,
    modalConnect,
    setModalConnect,
    modalStart,
    setModalStart,
  }

  const handleClickStart = () => {
    if (!userHave) {
      toast.error(t('not_user', { ns: 'error' }))
    } else {
      setModalStart(true)
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

  return (
    <>
      <MainComponent center={true}>
        <div className={s.menu}>
          <Button disabled={!userHave} onClick={handleClickStart}>
            {t('buttons.start')}
          </Button>
          <Button disabled={!userHave} onClick={handleClickConnect}>
            {t('buttons.connect')}
          </Button>
          <Button onClick={handleClickRules}>{t('buttons.rules')}</Button>
          <Button onClick={handleClickAccount}>
            {userHave ? user.nickname : t('buttons.account')}
          </Button>
          <div className={s.button_menu_small}>
            <ButtonTheme />
            <ButtonLanguage />
          </div>
        </div>
        <div className={s.block_1} />
        <div className={s.block_2} />
        <ModalWrapper {...modalWrapperConst} />
      </MainComponent>
    </>
  )
}
