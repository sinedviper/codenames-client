import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Button, ButtonLanguage } from 'components'
import { useAppSelector } from 'utils/hooks'
import { getAuth } from 'store/reducers/auth'

import s from './styles.module.css'

export function MenuPage(): JSX.Element {
  const { t } = useTranslation(['main', 'error'])
  const navigate = useNavigate()

  const { user } = useAppSelector(getAuth)

  const userHave = !user?.username

  const handleClickStart = () => {
    if (userHave) {
      toast.error(t('not_user', { ns: 'error' }))
    } else {
      navigate('/start')
    }
  }

  const handleClickConnect = () => {
    if (userHave) {
      toast.error(t('not_user', { ns: 'error' }))
    } else {
      navigate('/connect')
    }
  }

  const handleClickAccount = () => {
    navigate('/profile')
  }

  const handleClickRules = () => {
    navigate('/rules')
  }

  return (
    <div className={s.menu}>
      <Button disabled={userHave} onClick={handleClickStart}>
        {t('buttons.start')}
      </Button>
      <Button disabled={userHave} onClick={handleClickConnect}>
        {t('buttons.connect')}
      </Button>
      <Button onClick={handleClickRules}>{t('buttons.rules')}</Button>
      <Button onClick={handleClickAccount}>
        {!userHave ? user?.username : t('buttons.authorization')}
      </Button>
      <div className={s.button_menu_small}>
        <ButtonLanguage />
      </div>
    </div>
  )
}
