import React, { useState } from 'react'

import { Button, ContainerWrapper, Header2, Input, ModalWindow } from 'components'
import { useTranslation } from 'react-i18next'
import { useFormik, FormikProps } from 'formik'

type propsModalStart = {
  modalStart: boolean
  setModalStart: (val: boolean) => void
}

export const ModalStart = ({ modalStart, setModalStart }: propsModalStart): JSX.Element => {
  const { t } = useTranslation(['main'])

  const formik = useFormik({
    initialValues,
    onSubmit: (values, formikHelpers) => {
      console.log(values)
    },
  })

  return (
    <ModalWindow modal={modalStart} setModal={setModalStart}>
      <Header2>{t('start.title')}</Header2>
      <ContainerWrapper color={'none'} style={{ gap: 20 }}>
        <Input
          title={'Стартовое время'}
          variant={3}
          {...getValues({ value: 'start', formik: formik })}
        />
        <Input title={'Время между раундами'} variant={3} value={undefined} />
        <Input title={'Время раунда'} variant={3} value={undefined} />
        <Input
          title={'Количество добавляемых секунд при угадывании карточки'}
          variant={3}
          value={undefined}
        />
        <Input title={'Закрытая комната'} variant={2} value={undefined} />
        <Input title={'Пароль для входа'} variant={1} value={undefined} />
        <Input
          title={'Количество слов'}
          variant={4}
          list={list}
          {...getValues({ value: 'words', formik })}
        />
        <Input title={'Перевод карточек'} variant={2} />
      </ContainerWrapper>
      <Button color={'pink'}>Создать</Button>
    </ModalWindow>
  )
}

type initialType = {
  start: number
  roundBetween: number
  round: number
  bonus: number
  room: boolean
  password: string
  words: number
  translate: boolean
}

const initialValues = {
  start: 90,
  roundBetween: 30,
  round: 60,
  bonus: 15,
  room: false,
  password: '',
  words: 24,
  translate: false,
}

const list = [
  { id: 0, name: '16' },
  { id: 1, name: '24' },
  { id: 2, name: '32' },
  { id: 3, name: '48' },
]

const getValues = ({ value, formik }: { value: string; formik: FormikProps<initialType> }) => {
  return {
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    id: value,
    name: value,
    value: formik.values[value],
  }
}
