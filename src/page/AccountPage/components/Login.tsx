import { useTranslation } from 'react-i18next'
import * as yup from 'yup'

import { Button, Header2, Header3, Input } from 'components'

import s from '../styles.module.css'
import { useFormik } from 'formik'
import { useLoginAuthMutation } from 'store/reducers/auth'

export const Login = () => {
  const { t } = useTranslation(['main'])
  const [loginAuth, { isLoading }] = useLoginAuthMutation()

  const validationSchema = yup.object({
    [loginType.USERNAME]: yup.string().min(3).max(24).required(),
    [loginType.PASSWORD]: yup.string().min(6).max(24).required(),
  })

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      loginAuth(values).then((val) => {
        console.log(val)
      })
    },
  })

  return (
    <>
      <Header2 className={s.title}>{t('account.entry')}</Header2>
      <Header3>{t('account.titlenick')}</Header3>
      <Input
        value={formik.values.username}
        id={loginType.USERNAME}
        name={loginType.USERNAME}
        onChange={formik.handleChange}
        placeholder={String(t('account.placeholder'))}
        variant={1}
      />
      <Header3>{t('account.password')}</Header3>
      <Input
        value={formik.values.password}
        id={loginType.PASSWORD}
        name={loginType.PASSWORD}
        onChange={formik.handleChange}
        placeholder={String(t('account.password'))}
        variant={1}
      />
      <Button onClick={() => formik.submitForm()}>{t('account.login')}</Button>
    </>
  )
}

enum loginType {
  USERNAME = 'username',
  PASSWORD = 'password',
}

const initialValues = {
  [loginType.USERNAME]: '',
  [loginType.PASSWORD]: '',
}
