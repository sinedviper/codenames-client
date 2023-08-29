import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { AvatarColor, Button, Header3, Input, InputColor } from 'components'
import { SvgArrow } from 'assets/svg'

import s from './styles.module.css'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import { getUser } from '../../store/select'
import { actionChangeUser } from '../../store/slice'
import { toast } from 'react-toastify'

export function AccountPage(): JSX.Element {
  const { t } = useTranslation(['main'])
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const user = useAppSelector(getUser)

  const userHave = user.nickname !== ''

  const [colorChoose, setColorChoose] = useState(userHave ? user.color : '#000')
  const [inputNickname, setIInputNickname] = useState(userHave ? user.nickname : '')

  const handleChangeInput = (e) => {
    setIInputNickname(e.target.value)
  }

  const handleSaveUser = () => {
    if (validateInput(inputNickname, false) && colorChoose.trim() !== '') {
      dispatch(actionChangeUser({ nickname: inputNickname, color: colorChoose }))
    }
  }

  const handleChangeColor = (e) => {
    setColorChoose(e.target.value)
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
      <AvatarColor nickname={inputNickname} size={'xl'} color={colorChoose} />
      <Header3>{t('account.titlenick')}</Header3>
      <Input
        value={inputNickname}
        onChange={handleChangeInput}
        placeholder={String(t('account.placeholder'))}
        variant={1}
      />
      <Header3>{t('account.titlecolor')}</Header3>
      <InputColor value={colorChoose} setChange={handleChangeColor} />
      <Button onClick={handleSaveUser}>{t('account.button')}</Button>
    </div>
  )
}
