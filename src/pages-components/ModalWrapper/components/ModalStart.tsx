import React from 'react'

import { Header2, ModalWindow } from 'components'
import { useTranslation } from 'react-i18next'

type propsModalStart = {
  modalStart: boolean
  setModalStart: (val: boolean) => void
}

export const ModalStart = ({ modalStart, setModalStart }: propsModalStart): JSX.Element => {
  const { t } = useTranslation(['main'])

  return (
    <ModalWindow modal={modalStart} setModal={setModalStart}>
      <Header2>{t('start.title')}</Header2>
    </ModalWindow>
  )
}
