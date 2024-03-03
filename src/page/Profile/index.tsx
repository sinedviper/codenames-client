import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Button, TextHeader } from 'components'
import { SvgArrow } from 'assets/svg'
import { useAppDispatch } from 'utils/hooks'
import { logout } from 'store/reducers/auth'

import s from './styles.module.css'

export const Profile = (): JSX.Element => {
  const navigate = useNavigate()
  const { t } = useTranslation('translate')
  const dispatch = useAppDispatch()

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
      <Button onClick={handleExit} text={t('exitprofile')} />
    </div>
  )
}
