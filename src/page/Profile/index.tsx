import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import z from 'zod'

import {
  BlobAnimation,
  Button,
  Input,
  InputDate,
  OrbitAnimation,
  TextHeader,
  WrapInput,
} from 'components'
import { SvgArrow } from 'assets/svg'
import { useAppDispatch, useAppSelector } from 'utils/hooks'
import { getAuth, logout, useUpdateAuthMutation } from 'store/reducers/auth'
import { paramsBuilder } from 'utils/helpers'
import { schemaColor, schemaDate, schemaLogin, schemaPassword } from 'utils/contastants'
import { EInitial } from 'utils/enum'

import { ImageWrap, InfoUser } from './components'
import s from './styles.module.css'

export const Profile = (): JSX.Element => {
  const navigate = useNavigate()
  const { t } = useTranslation('translate')
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(getAuth)
  const [updateUser, { isLoading }] = useUpdateAuthMutation()

  const onSubmit = (params: TInitial) => {
    const date_recover =
      params.date_recover === user?.date_recover ? null : new Date(params.date_recover!)
    updateUser({ id: Number(user?.id), ...params, date_recover })
  }

  const initialValues = {
    [EInitial.USERNAME]: user?.username ?? '',
    [EInitial.PASSWORD]: '',
    [EInitial.DATERECOVERY]: user?.date_recover ?? null,
    [EInitial.NEWPASSWORD]: '',
    [EInitial.STATUS]: user?.status ?? '',
    [EInitial.COLOR]: user?.color ?? '',
  }

  const formik = useFormik<TInitial>({
    onSubmit,
    initialValues,
    enableReinitialize: true,
    validationSchema,
  })

  const handleExit = () => {
    dispatch(logout())
  }

  return (
    <div className={s.wrap_profile}>
      <Button variant={'none'} className={s.btn_back} onClick={() => navigate('/')}>
        <div className={s.svg_back}>
          <SvgArrow />
        </div>
      </Button>
      <TextHeader className={s.text_header} type={'h2'}>
        {t('profile')}
      </TextHeader>
      <section className={s.wrap_info}>
        <ImageWrap formik={formik} />
        <InfoUser />
      </section>
      <section className={s.wrap_inputs}>
        <WrapInput error={formik.errors[EInitial.USERNAME]}>
          <Input
            placeholder={t('login')}
            {...paramsBuilder({ values: EInitial.USERNAME, formik })}
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
        <WrapInput error={formik.errors[EInitial.NEWPASSWORD]}>
          <Input
            type={'password'}
            placeholder={t('newpassword')}
            {...paramsBuilder({ values: EInitial.NEWPASSWORD, formik })}
          />
        </WrapInput>
        <Button
          onClick={() => formik.submitForm()}
          disabled={(!formik.isValid || !formik.dirty) && !isLoading}
          variant={'gradient'}
          text={t('save')}
          load={isLoading}
        />
        {/*<Button text={t('settings')} />*/}
        <Button onClick={handleExit} text={t('exitprofile')} />
      </section>
      <BlobAnimation
        id={'blob_3'}
        className={s.blob}
        colorBlob={{ first: '--appear', second: '--appear' }}
      />
      <OrbitAnimation strokeWidth={2} strokeLine={15} className={s.orbit_1} />
    </div>
  )
}

export type TInitial = {
  [EInitial.USERNAME]: string
  [EInitial.PASSWORD]: string
  [EInitial.NEWPASSWORD]: string
  [EInitial.DATERECOVERY]: Date | null
  [EInitial.COLOR]: string
  [EInitial.STATUS]: string
}

const validationSchema = toFormikValidationSchema(
  z.object({
    [EInitial.USERNAME]: schemaLogin,
    [EInitial.PASSWORD]: schemaPassword.nullish(),
    [EInitial.NEWPASSWORD]: schemaPassword.nullish(),
    [EInitial.COLOR]: schemaColor,
    [EInitial.DATERECOVERY]: schemaDate,
  }),
)
