import { useTranslation } from 'react-i18next'

import { TextParagraph } from 'components'
import { useAppSelector } from 'utils/hooks'
import { getAuth } from 'store/reducers/auth'

import s from './styles.module.css'

export const InfoUser = (): JSX.Element => {
  const { t } = useTranslation('translate')

  const { user } = useAppSelector(getAuth)

  return (
    <section className={s.info}>
      <section className={s.info_text}>
        <TextParagraph>{t('ratinwl')}:</TextParagraph>
        <TextParagraph>{calculateAverage(user?.wins, user?.lose)}</TextParagraph>
      </section>
      <section className={s.info_text}>
        <TextParagraph>{t('points')}:</TextParagraph>
        <TextParagraph>{user?.scores}</TextParagraph>
      </section>
    </section>
  )
}

function calculateAverage(num1?: number, num2?: number): string {
  if (!num1 || !num2) {
    return '0.0'
  }
  if (num1 === 0 && num2 === 0) {
    return '0.0'
  } else {
    return ((num1 + num2) / 2).toFixed(1)
  }
}
