import {
  AvatarColor,
  Button,
  ContainerWrapper,
  Header2,
  Header3,
  Input,
  InputColor,
  ModalWindow,
} from 'components'
import React, { useState } from 'react'
import { actionChangeUser } from '../../store/slice'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../../store/select'
import { toast } from 'react-toastify'
import { Text } from '../../components/Text'
import { ContainerList } from '../../components/ContainerList'
import { ContainerLi } from '../../components/ContainerLi'

type modalWrapperT = {
  modalAccount: boolean
  setModalAccount: (val: boolean) => void
  modalRules: boolean
  setModalRules: (val: boolean) => void
  modalConnect: boolean
  setModalConnect: (val: boolean) => void
}

export const ModalWrapper = ({
  modalAccount,
  setModalAccount,
  modalRules,
  setModalRules,
  modalConnect,
  setModalConnect,
}: modalWrapperT): JSX.Element => {
  const { t } = useTranslation(['main', 'error', 'info'])
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const user = useAppSelector(getUser)

  const userHave = user.nickname !== ''

  const [colorChoose, setColorChoose] = useState(userHave ? user.color : '#000')
  const [inputNickname, setIInputNickname] = useState(userHave ? user.nickname : '')
  const [connectValue, setConnectValue] = useState('')

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

  const handleConnectGame = () => {
    if (validateInput(connectValue, true)) {
      navigate(`/${connectValue}`)
    }
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
    <>
      <ModalWindow modal={modalConnect} setModal={setModalConnect}>
        <Header2>{t('connect.title')}</Header2>
        <Input
          question={String(t('info_connect_code', { ns: 'info' }))}
          value={connectValue}
          onChange={(e: any) => setConnectValue(e.target.value)}
          placeholder={String(t('connect.placeholder'))}
        />
        <Button onClick={handleConnectGame} color={'green'}>
          {t('connect.button')}
        </Button>
      </ModalWindow>
      <ModalWindow modal={modalRules} setModal={setModalRules}>
        <Header2>{t('rules.title')}</Header2>
        <Text style={{ textAlign: 'justify' }}>{t('rules.text1')}</Text>
        <ContainerWrapper color={'green'}>
          <Text style={{ textAlign: 'justify' }}>{t('rules.text2')}</Text>
        </ContainerWrapper>
        <Text style={{ textAlign: 'justify' }}>{t('rules.text3')}</Text>
        <ContainerWrapper color={'purple'}>
          <Text style={{ textAlign: 'justify' }}>{t('rules.text4.title')}</Text>
          <ContainerList>
            {'01'.split('').map((val, key) => (
              <ContainerLi key={key}>
                <div
                  style={{
                    borderRadius: '5px',
                    width: '50px',
                    height: '30px',
                    background: t(`rules.text4.text.${key}.color`) ?? 'transparent',
                  }}
                />
                <Text>{t(`rules.text4.text.${key}.text`)}</Text>
              </ContainerLi>
            ))}
          </ContainerList>
        </ContainerWrapper>
        <Text>{t('rules.text5.title')}</Text>
        <ContainerList>
          {'01234'.split('').map((val, key) => (
            <ContainerLi key={key}>
              <Text>- {t(`rules.text5.text.${key}`)}</Text>
            </ContainerLi>
          ))}
        </ContainerList>
        <ContainerWrapper color={'blue'}>
          <Text style={{ textAlign: 'justify' }}>{t('rules.text6')}</Text>
        </ContainerWrapper>
      </ModalWindow>
      <ModalWindow modal={modalAccount} setModal={setModalAccount}>
        <AvatarColor nickname={inputNickname} size={'xl'} color={colorChoose} />
        <Header3>{t('account.titlenick')}</Header3>
        <Input
          value={inputNickname}
          onChange={handleChangeInput}
          placeholder={String(t('account.placeholder'))}
        />
        <Header3>{t('account.titlecolor')}</Header3>
        <InputColor value={colorChoose} setChange={handleChangeColor} />
        <Button onClick={handleSaveUser} color={'green'}>
          {t('account.button')}
        </Button>
      </ModalWindow>
    </>
  )
}
