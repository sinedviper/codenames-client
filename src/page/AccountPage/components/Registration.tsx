import { AvatarColor, Button, Header2, Header3, Input, InputColor } from 'components'
import s from '../styles.module.css'
import { useState } from 'react'
import { actionChangeUser } from '../../../store/slice'
import { useAppDispatch, useAppSelector } from '../../../utils/hooks'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { getAuth } from '../../../store/reducers/auth'

export const Registration = () => {
  const { t } = useTranslation(['main'])
  const dispatch = useAppDispatch()

  const { user } = useAppSelector(getAuth)

  const userHave = user?.username !== ''

  const [colorChoose, setColorChoose] = useState(userHave ? user?.color : '#ffffff')
  const [inputNickname, setIInputNickname] = useState(userHave ? user?.username : '')

  const handleChangeInput = (e) => {
    setIInputNickname(e.target.value)
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

  const handleSaveUser = () => {
    if (validateInput(inputNickname, false) && colorChoose.trim() !== '') {
      dispatch(actionChangeUser({ nickname: inputNickname, color: colorChoose }))
    }
  }

  const handleChangeColor = (e) => {
    setColorChoose(e.target.value)
  }

  return (
    <>
      <Header2 className={s.title}>{t('account.registration')}</Header2>
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
      <Button onClick={handleSaveUser}>{t('account.save')}</Button>
    </>
  )
}
