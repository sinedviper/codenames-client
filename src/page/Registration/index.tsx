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
import { EInitial } from 'utils/enum'

import s from './styles.module.css'

export const Registration = (): JSX.Element => {
  const navigate = useNavigate()
  const { t } = useTranslation('translate')
  const [registration, { isLoading }] = useRegistrationAuthMutation()

  const onSubmit = (params: TInitial) => {
    registration({ ...params, date_recover: new Date(params?.[EInitial.DATERECOVERY]) }).then(
      (data) => {
        if (data?.data?.accessToken) {
          navigate('/')
        }
      },
    )
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
        <WrapInput error={formik.errors[EInitial.USERNAME]}>
          <Input
            type={'text'}
            placeholder={t('login')}
            {...paramsBuilder({ values: EInitial.USERNAME, formik })}
          />
        </WrapInput>
        <WrapInput error={formik.errors[EInitial.COLOR]}>
          <InputColor
            placeholder={t('color')}
            {...paramsBuilder({ values: EInitial.COLOR, formik })}
          />
        </WrapInput>
        <WrapInput error={formik.errors[EInitial.DATERECOVERY]}>
          <InputDate {...paramsBuilder({ values: EInitial.DATERECOVERY, formik })} />
        </WrapInput>
        <WrapInput error={formik.errors[EInitial.PASSWORD]}>
          <Input
            type={'password'}
            placeholder={t('password')}
            {...paramsBuilder({ values: EInitial.PASSWORD, formik })}
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

const validationSchema = toFormikValidationSchema(
  z.object({
    [EInitial.USERNAME]: schemaLogin,
    [EInitial.PASSWORD]: schemaPassword,
    [EInitial.DATERECOVERY]: schemaDate,
    [EInitial.COLOR]: schemaColor,
  }),
)

type TInitial = {
  [EInitial.USERNAME]: string
  [EInitial.DATERECOVERY]: string
  [EInitial.COLOR]: string
  [EInitial.PASSWORD]: string
}

const initialValues: TInitial = {
  [EInitial.USERNAME]: '',
  [EInitial.PASSWORD]: '',
  [EInitial.DATERECOVERY]: '',
  [EInitial.COLOR]: '',
}
