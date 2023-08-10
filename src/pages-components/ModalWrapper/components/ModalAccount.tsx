import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { actionChangeUser } from 'store/slice'
import { useAppDispatch, useAppSelector } from 'utils/hooks'
import { getUser } from 'store/select'
import { AvatarColor, Button, Header3, Input, InputColor, ModalWindow } from 'components'

type propsModalAccount = {
  modalAccount: boolean
  setModalAccount: (val: boolean) => void
  validateInput: (input: string, check: boolean) => boolean
}

export const ModalAccount = ({
  modalAccount,
  setModalAccount,
  validateInput,
}: propsModalAccount): JSX.Element => {
  const { t } = useTranslation(['main'])
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
      setModalAccount(false)
    }
  }

  const handleChangeColor = (e) => {
    setColorChoose(e.target.value)
  }

  return (
    <ModalWindow modal={modalAccount} setModal={setModalAccount}>
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
    </ModalWindow>
  )
}
