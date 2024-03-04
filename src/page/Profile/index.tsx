import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import {
  BlobAnimation,
  Button,
  Img,
  Input,
  OrbitAnimation,
  TextHeader,
  TextParagraph,
} from 'components'
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
      <div className={s.wrap_info}>
        <section className={s.wrap_img}>
          <Img
            src={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/330px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg'
            }
          />
        </section>
        <section className={s.info}>
          <section className={s.info_text}>
            <TextParagraph>{t('ratinwl')}:</TextParagraph>
            <TextParagraph>2.5</TextParagraph>
          </section>
          <section className={s.info_text}>
            <TextParagraph>{t('points')}:</TextParagraph>
            <TextParagraph>235</TextParagraph>
          </section>
        </section>
      </div>
      <Input placeholder={t('login')} />
      <Input placeholder={t('birthday')} />
      <Input type={'password'} placeholder={t('password')} />
      <Button variant={'gradient'} text={t('save')} />
      <Button text={t('settings')} />
      <Button onClick={handleExit} text={t('exitprofile')} />
      <BlobAnimation
        id={'blob_3'}
        className={s.blob}
        colorBlob={{ first: '--appear', second: '--appear' }}
      />
      <OrbitAnimation strokeWidth={2} strokeLine={15} className={s.orbit_1} />
    </div>
  )
}
