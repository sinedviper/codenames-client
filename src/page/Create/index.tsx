import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'

import {
  Button,
  Input,
  TextHeader,
  InputCheck,
  WrapShowRelative,
  InputSelect,
  WrapInput,
} from 'components'
import { SvgArrow } from 'assets/svg'
import { paramsBuilder } from 'utils/helpers'
import { getRoom, useCreateParamsMutation } from 'store/reducers/room'
import { useAppSelector } from 'utils/hooks'

import s from './styles.module.css'

export const Create = (): JSX.Element => {
  const navigate = useNavigate()
  const { t } = useTranslation('translate')
  const [getCreateParams, { isLoading }] = useCreateParamsMutation()

  const { languages, words } = useAppSelector(getRoom)

  const [expanded, setExpanded] = useState(false)

  const onSubmit = (params: TInitial) => {
    console.log(params)
  }

  const handleBack = () => {
    if (expanded) {
      setExpanded(false)
    } else {
      navigate('/')
    }
  }

  const getTitleText = expanded ? t('advancedsettings') : t('settings')

  const formik = useFormik<TInitial>({ onSubmit, initialValues })

  useEffect(() => {
    getCreateParams(null)
  }, [])

  return (
    <div className={s.wrap_create}>
      <Button variant={'none'} className={s.btn_back} onClick={handleBack}>
        <div className={s.svg_back}>
          <SvgArrow />
        </div>
      </Button>
      <TextHeader className={s.text_header} type={'h2'}>
        {getTitleText}
      </TextHeader>
      <div className={s.wrap_btn}>
        {expanded ? (
          <>
            <WrapInput label={'starttime'}>
              <Input
                type={'number'}
                placeholder={t('entertime')}
                {...paramsBuilder<TInitial, number>({ formik, values: EInitial.STARTTIME })}
              />
            </WrapInput>
            <WrapInput label={'betweentime'}>
              <Input
                type={'number'}
                placeholder={t('entertime')}
                {...paramsBuilder<TInitial, number>({ formik, values: EInitial.BETWEENTIME })}
              />
            </WrapInput>
            <WrapInput label={'roundstime'}>
              <Input
                type={'number'}
                placeholder={t('entertime')}
                {...paramsBuilder<TInitial, number>({ formik, values: EInitial.ROUNDTIME })}
              />
            </WrapInput>
            <WrapInput label={'additionaltime'}>
              <Input
                type={'number'}
                placeholder={t('entertime')}
                {...paramsBuilder<TInitial, number>({ formik, values: EInitial.ADDTIME })}
              />
            </WrapInput>
            <InputSelect
              isDefault
              arraySelect={getArray<{ count: number }, string>(words, 'count')}
              isLoading={isLoading}
              placeholder={t('numbertime')}
              {...paramsBuilder<TInitial, number>({ formik, values: EInitial.MOUNTWORDS })}
            />
          </>
        ) : (
          <>
            <InputSelect
              arraySelect={getArray<{ language: string }, string>(languages, 'language')}
              isLoading={isLoading}
              placeholder={t('cardlanguage')}
              {...paramsBuilder<TInitial, number>({ formik, values: EInitial.LANGUAGE })}
            />
            <WrapShowRelative
              mainChildren={
                <InputCheck
                  label={t('translationofcards')}
                  {...paramsBuilder<TInitial, boolean>({ formik, values: EInitial.TRANSLATE_CARD })}
                />
              }
              isShow={formik.values[EInitial.TRANSLATE_CARD]}
            >
              <InputSelect
                arraySelect={getArray<{ language: string }, string>(languages, 'language')}
                isLoading={isLoading}
                placeholder={t('translationlanguage')}
                {...paramsBuilder<TInitial, number>({ formik, values: EInitial.LANGUAGE_CARD })}
              />
            </WrapShowRelative>
            <WrapShowRelative
              isShow={formik.values[EInitial.SECURITY]}
              mainChildren={
                <InputCheck
                  label={t('closedroom')}
                  {...paramsBuilder<TInitial, boolean>({ formik, values: EInitial.SECURITY })}
                />
              }
            >
              <Input
                placeholder={t('passwordforlogin')}
                {...paramsBuilder<TInitial, string>({ formik, values: EInitial.SECURITY_PASSWORD })}
              />
            </WrapShowRelative>
            <Button
              variant={'gradient'}
              text={t('creategame')}
              onClick={() => formik.submitForm()}
            />
            <Button text={t('advancedsettings')} onClick={() => setExpanded(true)} />
          </>
        )}
      </div>
    </div>
  )
}

enum EInitial {
  LANGUAGE = 'language',
  TRANSLATE_CARD = 'translate_card',
  LANGUAGE_CARD = 'language_card',
  SECURITY = 'security',
  SECURITY_PASSWORD = 'security_password',
  STARTTIME = 'start_time',
  BETWEENTIME = 'between_time',
  ROUNDTIME = 'round_time',
  ADDTIME = 'add_time',
  MOUNTWORDS = 'mount_words',
}

type TInitial = {
  [EInitial.LANGUAGE]: string
  [EInitial.TRANSLATE_CARD]: boolean
  [EInitial.LANGUAGE_CARD]?: number
  [EInitial.SECURITY]: boolean
  [EInitial.SECURITY_PASSWORD]: string
  [EInitial.STARTTIME]: number
  [EInitial.BETWEENTIME]: number
  [EInitial.ROUNDTIME]: number
  [EInitial.ADDTIME]: number
  [EInitial.MOUNTWORDS]?: number
}

const initialValues: TInitial = {
  [EInitial.LANGUAGE]: '',
  [EInitial.SECURITY_PASSWORD]: '',
  [EInitial.TRANSLATE_CARD]: false,
  [EInitial.SECURITY]: false,
  [EInitial.STARTTIME]: 90,
  [EInitial.BETWEENTIME]: 30,
  [EInitial.ROUNDTIME]: 60,
  [EInitial.ADDTIME]: 15,
}

type TGetArray<Value> = {
  id: number
  createdAt: Date
} & Value

type TGetArrayReturn<Value> = {
  id: number
  value: Value
}

function getArray<Value, ValueReturn>(
  value: TGetArray<Value>[],
  key: string,
): TGetArrayReturn<ValueReturn>[] {
  return value.map((val) => ({ id: val.id, value: val[key] as ValueReturn }))
}
