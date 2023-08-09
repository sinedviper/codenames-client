import React, { useState } from 'react'

import {
  Button,
  ContainerRelativeShow,
  ContainerWrapper,
  Header2,
  Input,
  ModalWindow,
} from 'components'
import { useTranslation } from 'react-i18next'
import { useFormik, FormikProps } from 'formik'
import { useNavigate } from 'react-router-dom'

type propsModalStart = {
  modalStart: boolean
  setModalStart: (val: boolean) => void
}

export const ModalStart = ({ modalStart, setModalStart }: propsModalStart): JSX.Element => {
  const navigate = useNavigate()
  const { t } = useTranslation(['main'])

  const [showSetting, setShowSetting] = useState(false)

  const formik = useFormik<initialType>({
    initialValues,
    onSubmit: (values) => {
      navigate('/434212341')
    },
  })

  return (
    <ModalWindow modal={modalStart} setModal={setModalStart}>
      <Header2>{t('start.title')}</Header2>
      <Button color={'blue'} onClick={() => formik.submitForm()}>
        {t('start.btn-start')}
      </Button>
      <Input
        title={t('start.input-translate') as string}
        variant={2}
        {...getValues({ value: createGame.translate, formik })}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Input
          title={t('start.input-check-room') as string}
          variant={2}
          {...getValues({ value: createGame.room, formik })}
        />
        <ContainerRelativeShow show={formik.values.room}>
          <Input
            title={t('start.input-pass-room') as string}
            variant={1}
            {...getValues({ value: createGame.password, formik })}
          />
        </ContainerRelativeShow>
      </div>
      <Button color={'orange'} onClick={() => setShowSetting(!showSetting)}>
        {t('start.btn-setting-help') as string}
      </Button>
      <ContainerRelativeShow show={showSetting} style={{ transition: 'all 600ms easy-in-out' }}>
        <ContainerWrapper color={'none'} style={{ gap: 20 }}>
          <Input
            title={t('start.input-start') as string}
            variant={3}
            {...getValues({ value: createGame.start, formik })}
          />
          <Input
            title={t('start.input-between') as string}
            variant={3}
            {...getValues({ value: createGame.roundBetween, formik })}
          />
          <Input
            title={t('start.input-hour') as string}
            variant={3}
            {...getValues({ value: createGame.round, formik })}
          />
          <Input
            title={t('start.input-add-time') as string}
            variant={3}
            {...getValues({ value: createGame.bonus, formik })}
          />
          <Input
            title={t('start.input-words') as string}
            variant={4}
            list={list}
            {...getValues({ value: createGame.words, formik })}
          />
        </ContainerWrapper>
      </ContainerRelativeShow>
    </ModalWindow>
  )
}

enum createGame {
  start = 'start',
  roundBetween = 'roundBetween',
  round = 'round',
  bonus = 'bonus',
  room = 'room',
  password = 'password',
  words = 'words',
  translate = 'translate',
}

type initialType = {
  start: number
  roundBetween: number
  round: number
  bonus: number
  room: boolean
  password: string
  words: { id: number; name: string } | null
  translate: boolean
}

const initialValues = {
  start: 90,
  roundBetween: 30,
  round: 60,
  bonus: 15,
  room: false,
  password: '',
  words: { id: 0, name: '16' },
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
