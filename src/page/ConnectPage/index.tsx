import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, Header2, Input } from 'components'
import { SvgArrow } from 'assets/svg'

import s from './styles.module.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export function ConnectPage(): JSX.Element {
  const { t } = useTranslation(['main', 'info'])
  const navigate = useNavigate()

  const [connectValue, setConnectValue] = useState('')

  const handleConnectGame = () => {
    if (validateInput(connectValue, true)) {
      navigate(`/${connectValue}`)
    }
  }

  const handleClickBack = () => {
    navigate('/')
  }

  function validateInput(input: string, check: boolean): boolean {
    const englishLettersRegex = /^[a-zA-Z0-9]+$/
    if (!input) {
      toast.error(t('input_null', { ns: 'error' }))
      return false
    } else if (!check && input.length > 25) {
      toast.error(t('input_large_25', { ns: 'error' }))
      return false
    } else if (check && input.length !== 10) {
      toast.error(t('input_large_10', { ns: 'error' }))
      return false
    } else if (!englishLettersRegex.test(input)) {
      toast.error(t('input_english_check', { ns: 'error' }))
      return false
    } else {
      return true
    }
  }

  return (
    <div className={s.menu}>
      <Button onClick={handleClickBack} color={'none'} className={s.btn_back}>
        <SvgArrow /> {t('rules.btn')}
      </Button>
      <Header2>{t('connect.title')}</Header2>
      <Input
        question={String(t('info_connect_code', { ns: 'info' }))}
        value={connectValue}
        onChange={(e: any) => setConnectValue(e.target.value)}
        placeholder={String(t('connect.placeholder'))}
        variant={1}
      />
      <Button onClick={handleConnectGame}>{t('connect.button')}</Button>
    </div>
  )
}
