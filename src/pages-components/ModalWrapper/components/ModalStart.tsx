import React from 'react'

import { Button, ContainerWrapper, Header2, Input, ModalWindow } from 'components'
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
      <ContainerWrapper color={'none'} style={{ gap: 20 }}>
        <Input title={'Стартовое время'} variant={3} />
        <Input title={'Время между раундами'} variant={3} />
        <Input title={'Время раунда'} variant={3} />
        <Input title={'Количество добавляемых секунд при угадывании карточки'} variant={3} />
        <Input title={'Закрытая комната'} variant={2} />
        <Input title={'Пароль для входа'} variant={1} />
        <Input title={'Количество слов'} variant={4} />
        <p>количество слов 16 24 32 48 - select</p>
        <Input title={'Перевод карточек'} variant={2} />
      </ContainerWrapper>
      <Button color={'pink'}>Создать</Button>
    </ModalWindow>
  )
}
