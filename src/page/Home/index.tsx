import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Button, TextHeader, TextParagraph } from 'components'
import { SvgClose, SvgGlobus } from 'assets/svg'
import { useAppSelector } from 'utils/hooks'
import { getAuth } from 'store/reducers/auth'
import { WrapModal } from 'components'

import s from './styles.module.css'

export const Home = (): JSX.Element => {
  const { t, i18n } = useTranslation('translate')
  const navigate = useNavigate()
  const { token } = useAppSelector(getAuth)

  const [showModal, setShowModal] = useState(false)

  const handleClickLanguage = (ln: 'uk' | 'en'): void => {
    i18n.changeLanguage(ln)
    setShowModal(false)
  }

  const handleProfile = () => {
    if (token) {
      navigate('/profile')
    } else {
      navigate('/login')
    }
  }

  return (
    <div className={s.wrapper_main}>
      <TextHeader className={s.title}>Codenames</TextHeader>
      <div className={s.wrap_btns}>
        <Button disabled={!token} text={t('creategame')} onClick={() => navigate('/create')} />
        <Button disabled={!token} text={t('connecttogame')} onClick={() => navigate('/connect')} />
        <Button text={t('rules')} onClick={() => navigate('/rules')} />
        <Button text={t(token ? 'profile' : 'authorization')} onClick={handleProfile} />
      </div>
      <Button variant={'none'} onClick={() => setShowModal(!showModal)}>
        <div className={s.wrap_globus}>
          <SvgGlobus />
        </div>
        <TextParagraph type={'p2'} className={s.globus_text}>
          {i18n.language}
        </TextParagraph>
      </Button>
      <WrapModal show={showModal} className={s.wrap_modal}>
        <TextHeader type={'h2'}>Language</TextHeader>
        <Button variant={'none'} className={s.btn_close} onClick={() => setShowModal(false)}>
          <div className={s.svg_close}>
            <SvgClose />
          </div>
        </Button>
        <div className={s.wrap_language}>
          <Button variant={'none'} text={'English'} onClick={() => handleClickLanguage('en')} />
          <Button variant={'none'} text={'Українська'} onClick={() => handleClickLanguage('uk')} />
        </div>
      </WrapModal>
    </div>
  )
}
