import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Button, Input, TextHeader, InputCheck } from 'components'
import { SvgArrow } from 'assets/svg'

import s from './styles.module.css'

export const Create = (): JSX.Element => {
  const navigate = useNavigate()
  const { t } = useTranslation('translate')

  return (
    <div className={s.wrap_create}>
      <Button variant={'none'} className={s.btn_back} onClick={() => navigate('/')}>
        <div className={s.svg_back}>
          <SvgArrow />
        </div>
      </Button>
      <TextHeader className={s.text_header} type={'h2'}>
        {t('settings')}
      </TextHeader>
      <div className={s.wrap_btn}>
        <Input placeholder={t('cardlanguage')} />
        <InputCheck label={t('translationofcards')} />
        <Input placeholder={t('translationlanguage')} />
        <InputCheck label={t('closedroom')} />
        <Input placeholder={t('passwordforlogin')} />
        <Button variant={'gradient'} text={t('creategame')}></Button>
        <Button text={t('advancedsettings')}></Button>
      </div>
    </div>
  )
}
