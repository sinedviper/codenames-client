import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Button, Header2, Input, ModalWindow } from 'components'

type propsModalConnect = {
  modalConnect: boolean
  setModalConnect: (val: boolean) => void
  validateInput: (input: string, check: boolean) => boolean
}

export const ModalConnect = ({
  modalConnect,
  setModalConnect,
  validateInput,
}: propsModalConnect): JSX.Element => {
  const { t } = useTranslation(['main', 'info'])
  const navigate = useNavigate()

  const [connectValue, setConnectValue] = useState('')

  const handleConnectGame = () => {
    if (validateInput(connectValue, true)) {
      navigate(`/${connectValue}`)
    }
  }

  return (
    <ModalWindow modal={modalConnect} setModal={setModalConnect}>
      <Header2>{t('connect.title')}</Header2>
      <Input
        question={String(t('info_connect_code', { ns: 'info' }))}
        value={connectValue}
        onChange={(e: any) => setConnectValue(e.target.value)}
        placeholder={String(t('connect.placeholder'))}
      />
      <Button onClick={handleConnectGame} color={'green'}>
        {t('connect.button')}
      </Button>
    </ModalWindow>
  )
}
