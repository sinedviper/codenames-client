import s from './styles.module.css'
import { Button, TextHeader, TextParagraph } from 'components'
import { useTranslation } from 'react-i18next'
import { SvgArrow } from 'assets/svg'
import { useNavigate } from 'react-router-dom'

export const Rules = (): JSX.Element => {
  const { t } = useTranslation('translate')
  const navigate = useNavigate()

  return (
    <div className={s.wrap_rules}>
      <Button variant={'none'} className={s.btn_back} onClick={() => navigate('/')}>
        <div className={s.svg_back}>
          <SvgArrow />
        </div>
      </Button>
      <TextHeader className={s.text_header} type={'h2'}>
        {t('rules')}
      </TextHeader>
      <div className={s.wrap_text}>
        <TextParagraph className={s.text_rule} type={'p2'}>
          {t('rules_1')}
        </TextParagraph>
        <TextParagraph className={s.text_rule} type={'p2'}>
          {t('rules_2')}
        </TextParagraph>
        <TextParagraph className={s.text_rule} type={'p2'}>
          {t('rules_3')}
        </TextParagraph>
        <div className={s.wrap_colors}>
          <TextParagraph className={s.text_rule} type={'p2'}>
            {t('rules_4')}
          </TextParagraph>
          <div className={s.wrapper_colors}>
            <div className={s.wrap_color}>
              <span className={s.color_1} />
              <TextParagraph className={s.text_rule} type={'p2'}>
                {t('rules_5')}
              </TextParagraph>
            </div>
            <div className={s.wrap_color}>
              <span className={s.color_2} />
              <TextParagraph className={s.text_rule} type={'p2'}>
                {t('rules_6')}
              </TextParagraph>
            </div>
          </div>
        </div>
        <TextParagraph className={s.text_rule_no} type={'p2'}>
          {t('rules_7')}
        </TextParagraph>
        <TextParagraph className={s.text_rule} type={'p2'}>
          {t('rules_8')}
        </TextParagraph>
      </div>
    </div>
  )
}
