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
        <Input title={'Стартовое время'} type={'number'} />
        <Input title={'Время между раундами'} type={'number'} />
        <Input title={'Время раунда'} type={'number'} />
        <Input
          title={'Количество добавляемых секунд при угадывании карточки - int'}
          type={'number'}
        />
        <p>цвет комнаты - select</p>
        <Input title={'Закрытая комната - boolean'} type={'checkbox'} />
        <Input title={'Пароль для входа'} />
        <p>количество слов 16 24 32 48 - select</p>
        <Input title={'Перевод карточек - boolean'} type={'checkbox'} />
      </ContainerWrapper>
      <Button color={'pink'}>Создать</Button>
    </ModalWindow>
  )
}
