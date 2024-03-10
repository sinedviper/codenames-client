import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import z from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'

import { paramsBuilder } from 'utils/helpers'
import { useLoginAuthMutation } from 'store/reducers/auth'
import { Button, Input, TextHeader, WrapInput } from 'components'
import { SvgArrow } from 'assets/svg'
import { schemaLogin, schemaPassword } from 'utils/contastants'

import s from './styles.module.css'

export const Login = (): JSX.Element => {
  const navigate = useNavigate()
  const { t } = useTranslation('translate')
  const [login, { isLoading }] = useLoginAuthMutation()

  const onSubmit = (params: TInitial) => {
    login(params).then((data) => {
      if (data?.data?.accessToken) {
        navigate('/')
      }
    })
  }

  const formik = useFormik<TInitial>({
    initialValues,
    onSubmit,
    validationSchema,
  })

  return (
    <div className={s.wrapper_login}>
      <Button variant={'none'} className={s.btn_back} onClick={() => navigate('/')}>
        <div className={s.svg_back}>
          <SvgArrow />
        </div>
      </Button>
      <TextHeader type={'h2'}>{t('signin')}</TextHeader>
      <div className={s.wrap_inputs}>
        <WrapInput error={formik.errors[EAuth.USERNAME]}>
          <Input
            type={'text'}
            placeholder={t('login')}
            {...paramsBuilder({ values: EAuth.USERNAME, formik })}
          />
        </WrapInput>
        <WrapInput error={formik.errors[EAuth.PASSWORD]}>
          <Input
            type={'password'}
            placeholder={t('password')}
            {...paramsBuilder({ values: EAuth.PASSWORD, formik })}
          />
        </WrapInput>
      </div>
      <Button
        variant={'gradient'}
        text={t('enter')}
        onClick={() => formik.submitForm()}
        load={isLoading}
      />
      <Button variant={'none'} text={t('registration')} onClick={() => navigate('/registration')} />
    </div>
  )
}

enum EAuth {
  USERNAME = 'username',
  PASSWORD = 'password',
}

const validationSchema = toFormikValidationSchema(
  z.object({
    [EAuth.USERNAME]: schemaLogin,
    [EAuth.PASSWORD]: schemaPassword,
  }),
)

type TInitial = {
  [EAuth.USERNAME]: string
  [EAuth.PASSWORD]: string
}

const initialValues: TInitial = {
  [EAuth.USERNAME]: '',
  [EAuth.PASSWORD]: '',
}
