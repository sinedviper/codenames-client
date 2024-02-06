import s from './styles.module.css'
import { Button } from 'components'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from 'utils/hooks'
import { getAuth } from 'store/reducers/auth'
import { SvgEdit, SvgPlus, SvgUpload } from 'assets/svg'

export const ProfileInfo = (): JSX.Element => {
  const { t } = useTranslation(['main'])

  const { user } = useAppSelector(getAuth)

  return (
    <div className={s.wrap_profile}>
      <div className={s.wrap_picture}>
        {user?.avatar ? (
          <img src={user?.avatar} alt={'avatar'} className={s.img} />
        ) : (
          <div className={s.wrap_img} style={{ background: user?.color }}>
            <p className={s.text_user}>{user?.username.slice(0, 1)}</p>
          </div>
        )}
        <Button className={s.btn_plus}>
          <SvgPlus className={s.svg} />
        </Button>
        <div className={s.wrap_upload}>
          <Button className={s.btn_upload} color={'none'}>
            <SvgUpload />
          </Button>
        </div>
        <Button className={s.btn_edit}>
          <SvgEdit className={s.svg} />
        </Button>
      </div>
      <div className={s.wrap_info}>
        <p className={s.info}>Username: {user?.username}</p>
        <p className={s.info}>Lose: {user?.lose}</p>
        <p className={s.info}>Win: {user?.wins}</p>
        <p className={s.info}>Win/Lose: {user?.wins && user?.lose ? user?.wins / user?.lose : 0}</p>
        <p className={s.info}>Scores: {user?.scores}</p>
        <Button color={'green'}>{t('account.update')}</Button>
      </div>
    </div>
  )
}
