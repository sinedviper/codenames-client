import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { Button } from 'components'
import { SvgArrow } from 'assets/svg'

import s from './styles.module.css'

import { Login, Registration } from './components'

export function AccountPage(): JSX.Element {
  const { t } = useTranslation(['main'])
  const navigate = useNavigate()

  const [authorization, setAuthorization] = useState(false)

  const handleClickBack = () => {
    navigate('/')
  }

  const handleChangeAuth = (): void => {
    setAuthorization(!authorization)
  }

  return (
    <div className={s.menu}>
      <Button onClick={handleClickBack} color={'none'} className={s.btn_back}>
        <SvgArrow /> {t('rules.btn')}
      </Button>
      <div className={s.wrap_authorization}>
        {authorization ? <Registration /> : <Login />}
        <Button onClick={handleChangeAuth}>
          {authorization ? t('account.login') : t('account.signin')}
        </Button>
      </div>
    </div>
  )
}
