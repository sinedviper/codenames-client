import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { Button } from 'components'
import { SvgArrow } from 'assets/svg'

import s from './styles.module.css'

import { Login, ProfileInfo, Registration } from './components'
import { useAppSelector } from '../../utils/hooks'
import { getAuth } from '../../store/reducers/auth'

export function AccountPage(): JSX.Element {
  const { t } = useTranslation(['main'])
  const navigate = useNavigate()

  const { user } = useAppSelector(getAuth)

  const userHave = !user?.username

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
      {!userHave ? (
        <ProfileInfo />
      ) : (
        <div className={s.wrap_authorization}>
          {authorization ? <Registration /> : <Login />}
          <Button onClick={handleChangeAuth}>
            {authorization ? t('account.login') : t('account.signin')}
          </Button>
        </div>
      )}
    </div>
  )
}
