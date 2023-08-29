import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { FormikProps, useFormik } from 'formik'

import { Button, ContainerRelativeShow, ContainerWrapper, Header2, Input } from 'components'
import { SvgArrow } from 'assets/svg'

import s from './styles.module.css'

export function StartPage(): JSX.Element {
  const { t } = useTranslation(['main', 'info'])
  const navigate = useNavigate()

  const [showSetting, setShowSetting] = useState(false)

  const formik = useFormik<initialType>({
    initialValues,
    onSubmit: (values) => {
      navigate('/room/434212341')
    },
  })

  const handleClickBack = () => {
    navigate('/')
  }

  return (
    <div className={s.menu}>
      <Button onClick={handleClickBack} color={'none'} className={s.btn_back}>
        <SvgArrow /> {t('rules.btn')}
      </Button>
      <Header2>{t('start.title')}</Header2>
      <Button onClick={() => formik.submitForm()}>{t('start.btn-start')}</Button>
      <Input
        title={t('start.input-languages') as string}
        variant={4}
        list={languages}
        {...getValues({ value: createGame.languages, formik })}
      />
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
      <Button onClick={() => setShowSetting(!showSetting)}>
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
    </div>
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
  languages = 'languages',
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
  languages: { id: number; name: string } | null
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
  languages: { id: 0, name: 'ENG' },
}

const list = [
  { id: 0, name: '16' },
  { id: 1, name: '24' },
  { id: 2, name: '32' },
  { id: 3, name: '48' },
]

const languages = [
  { id: 0, name: 'ENG' },
  { id: 1, name: 'УКР' },
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
