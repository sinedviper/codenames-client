import { useNavigate } from 'react-router-dom'

import { Button, Input, TextHeader } from 'components'
import { SvgArrow } from 'assets/svg'

import s from './styles.module.css'
import { useTranslation } from 'react-i18next'

export const Login = (): JSX.Element => {
  const navigate = useNavigate()
  const { t } = useTranslation('translate')

  return (
    <div className={s.wrapper_login}>
      <Button variant={'none'} className={s.btn_back} onClick={() => navigate('/')}>
        <div className={s.svg_back}>
          <SvgArrow />
        </div>
      </Button>
      <TextHeader type={'h2'}>{t('signin')}</TextHeader>
      <div className={s.wrap_inputs}>
        <Input type={'text'} placeholder={t('login')} />
        <Input type={'password'} placeholder={t('password')} />
      </div>
      <Button variant={'gradient'} text={t('enter')} />
      <Button variant={'none'} text={t('registration')} />
    </div>
  )
}
