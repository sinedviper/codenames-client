import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { paramsBuilder } from 'utils/helpers'
import { useLoginAuthMutation } from 'store/reducers/auth'

import { Button, Input, TextHeader } from 'components'
import { SvgArrow } from 'assets/svg'

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

  const formik = useFormik<TInitial>({ initialValues, onSubmit })

  return (
    <div className={s.wrapper_login}>
      <Button variant={'none'} className={s.btn_back} onClick={() => navigate('/')}>
        <div className={s.svg_back}>
          <SvgArrow />
        </div>
      </Button>
      <TextHeader type={'h2'}>{t('signin')}</TextHeader>
      <div className={s.wrap_inputs}>
        <Input
          type={'text'}
          placeholder={t('login')}
          {...paramsBuilder({ values: EAuth.USERNAME, formik })}
        />
        <Input
          type={'password'}
          placeholder={t('password')}
          {...paramsBuilder({ values: EAuth.PASSWORD, formik })}
        />
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

type TInitial = {
  [EAuth.USERNAME]: string
  [EAuth.PASSWORD]: string
}

const initialValues: TInitial = {
  [EAuth.USERNAME]: '',
  [EAuth.PASSWORD]: '',
}
