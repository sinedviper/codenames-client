import React from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import cn from 'classnames'

import { SvgThunderStormDark, SvgThunderStormLight } from 'assets/svg'
import { FooterComponent } from 'pages-components'
import { MainComponent, Button } from 'components'
import { useAppDispatch, useAppSelector } from 'utils/hooks'
import { actionChangeTheme } from 'store/slice'
import { getTheme } from 'store/select'

import styles from './styles.module.css'

export default function MainPage(): JSX.Element {
  const { t } = useTranslation(['main', 'error'])
  const dispatch = useAppDispatch()

  const user = localStorage.getItem('user')
  const theme = useAppSelector(getTheme)

  const handleClick = () => {
    if (!user) {
      toast.error(t('not_user', { ns: 'error' }))
    }
  }

  const handleChangeTheme = () => {
    dispatch(actionChangeTheme(!theme))
  }

  return (
    <>
      <MainComponent center={true}>
        <ul className={styles.menu}>
          <li>
            <Button className={cn()} notAllow={!user} onClick={handleClick}>
              {t('buttons.start')}
            </Button>
          </li>
          <li>
            <Button>{t('buttons.connect')}</Button>
          </li>
          <li>
            <Button>{t('buttons.rules')}</Button>
          </li>
          <li>
            <Button>{t('buttons.account')}</Button>
          </li>
          <li className={styles.button_menu_small}>
            <button onClick={handleChangeTheme}>
              {theme ? <SvgThunderStormDark /> : <SvgThunderStormLight />}
            </button>
            <button>language</button>
          </li>
        </ul>
      </MainComponent>
      <FooterComponent />
    </>
  )
}
