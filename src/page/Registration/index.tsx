import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import z from 'zod'

import { paramsBuilder } from 'utils/helpers'
import { useRegistrationAuthMutation } from 'store/reducers/auth'
import { schemaColor, schemaDate, schemaLogin, schemaPassword } from 'utils/contastants'
import { Button, Input, InputColor, InputDate, TextHeader, WrapInput } from 'components'
import { SvgArrow } from 'assets/svg'

import s from './styles.module.css'

export const Registration = (): JSX.Element => {
  const navigate = useNavigate()
  const { t } = useTranslation('translate')
  const [registration, { isLoading }] = useRegistrationAuthMutation()

  const onSubmit = (params: TInitial) => {
    registration({ ...params, date_recover: new Date(params?.[EAuth.DATE]) }).then((data) => {
      if (data?.data?.accessToken) {
        navigate('/')
      }
    })
  }

  const formik = useFormik<TInitial>({ initialValues, onSubmit, validationSchema })

  return (
    <div className={s.wrapper_login}>
      <Button variant={'none'} className={s.btn_back} onClick={() => navigate('/login')}>
        <div className={s.svg_back}>
          <SvgArrow />
        </div>
      </Button>
      <TextHeader type={'h2'}>{t('registration')}</TextHeader>
      <div className={s.wrap_inputs}>
        <WrapInput error={formik.errors[EAuth.USERNAME]}>
          <Input
            type={'text'}
            placeholder={t('login')}
            {...paramsBuilder({ values: EAuth.USERNAME, formik })}
          />
        </WrapInput>
        <WrapInput error={formik.errors[EAuth.COLOR]}>
          <InputColor
            placeholder={t('color')}
            {...paramsBuilder({ values: EAuth.COLOR, formik })}
          />
        </WrapInput>
        <WrapInput error={formik.errors[EAuth.DATE]}>
          <InputDate {...paramsBuilder({ values: EAuth.DATE, formik })} />
        </WrapInput>
        <WrapInput error={formik.errors[EAuth.PASSWORD]}>
          <Input
            type={'password'}
            placeholder={t('password')}
            {...paramsBuilder({ values: EAuth.PASSWORD, formik })}
          />
        </WrapInput>
        {/*<Input*/}
        {/*  type={'password'}*/}
        {/*  placeholder={t('passwordcor')}*/}
        {/*  {...paramsBuilder({ values: EAuth.PASSWORDCOR, formik })}*/}
        {/*/>*/}
      </div>
      <Button
        disabled={!formik.isValid || !formik.dirty}
        variant={'gradient'}
        text={t('signup')}
        onClick={() => formik.submitForm()}
        load={isLoading}
      />
    </div>
  )
}

enum EAuth {
  USERNAME = 'username',
  DATE = 'date_recover',
  COLOR = 'color',
  PASSWORD = 'password',
  PASSWORDCOR = 'passwordCorrect',
}

const validationSchema = toFormikValidationSchema(
  z.object({
    [EAuth.USERNAME]: schemaLogin,
    [EAuth.PASSWORD]: schemaPassword,
    [EAuth.DATE]: schemaDate,
    [EAuth.COLOR]: schemaColor,
  }),
)

type TInitial = {
  [EAuth.USERNAME]: string
  [EAuth.DATE]: string
  [EAuth.COLOR]: string
  [EAuth.PASSWORD]: string
}

const initialValues: TInitial = {
  [EAuth.USERNAME]: '',
  [EAuth.PASSWORD]: '',
  [EAuth.DATE]: '',
  [EAuth.COLOR]: '',
}
