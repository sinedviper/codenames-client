import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'

import { Button, Input, TextHeader } from 'components'
import { SvgArrow } from 'assets/svg'
import { paramsBuilder } from 'utils/helpers'

import s from './styles.module.css'

export const Connect = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('translate')

  const onSubmit = (params: TInitial) => {}

  const formik = useFormik<TInitial>({ initialValues, onSubmit })

  return (
    <div className={s.wrap_connect}>
      <Button variant={'none'} className={s.btn_back} onClick={() => navigate('/')}>
        <div className={s.svg_back}>
          <SvgArrow />
        </div>
      </Button>
      <TextHeader type={'h2'}>{t('connecttogame')}</TextHeader>
      <Input
        type={'text'}
        placeholder={t('code')}
        {...paramsBuilder({ values: EInitial.CODE, formik })}
      />
      <Button
        variant={'gradient'}
        text={t('connect')}
        onClick={() => formik.submitForm()}
        load={false}
      />
    </div>
  )
}

enum EInitial {
  CODE = 'code',
}

type TInitial = {
  [EInitial.CODE]: string
}

const initialValues: TInitial = {
  [EInitial.CODE]: '',
}
