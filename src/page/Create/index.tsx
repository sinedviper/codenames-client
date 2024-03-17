import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'

import { Button, Input, TextHeader, InputCheck, WrapShowRelative, InputSelect } from 'components'
import { SvgArrow } from 'assets/svg'
import { paramsBuilder } from 'utils/helpers'

import s from './styles.module.css'

export const Create = (): JSX.Element => {
  const navigate = useNavigate()
  const { t } = useTranslation('translate')

  const onSubmit = (params: TInitial) => {
    console.log(params)
  }

  const formik = useFormik<TInitial>({ onSubmit, initialValues })

  return (
    <div className={s.wrap_create}>
      <Button variant={'none'} className={s.btn_back} onClick={() => navigate('/')}>
        <div className={s.svg_back}>
          <SvgArrow />
        </div>
      </Button>
      <TextHeader className={s.text_header} type={'h2'}>
        {t('settings')}
      </TextHeader>
      <div className={s.wrap_btn}>
        <InputSelect
          arraySelect={arrayList}
          isLoading={false}
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
            arraySelect={arrayList}
            isLoading={false}
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
        <Button variant={'gradient'} text={t('creategame')} onClick={() => formik.submitForm()} />
        <Button text={t('advancedsettings')}></Button>
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
}

type TInitial = {
  [EInitial.LANGUAGE]: string
  [EInitial.TRANSLATE_CARD]: boolean
  [EInitial.LANGUAGE_CARD]?: number
  [EInitial.SECURITY]: boolean
  [EInitial.SECURITY_PASSWORD]?: number
}

const initialValues: TInitial = {
  [EInitial.LANGUAGE]: '',
  [EInitial.TRANSLATE_CARD]: false,
  // [EInitial.LANGUAGE_CARD]: undefined,
  [EInitial.SECURITY]: false,
  // [EInitial.SECURITY_PASSWORD]: undefined,
}

const arrayList = [
  { id: 0, value: 'Ukraine' },
  { id: 1, value: 'Ukraine' },
  { id: 2, value: 'Ukraine' },
  { id: 3, value: 'Ukraine' },
  { id: 4, value: 'Ukraine' },
  { id: 5, value: 'Ukraine' },
  { id: 6, value: 'Ukraine' },
  { id: 7, value: 'Ukraine' },
  { id: 8, value: 'Ukraine' },
]
