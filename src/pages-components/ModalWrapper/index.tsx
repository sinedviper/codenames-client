import React from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { ModalAccount, ModalRules, ModalConnect, ModalStart } from './components'

type modalWrapperT = {
  modalAccount: boolean
  setModalAccount: (val: boolean) => void
  modalRules: boolean
  setModalRules: (val: boolean) => void
  modalConnect: boolean
  setModalConnect: (val: boolean) => void
  modalStart: boolean
  setModalStart: (val: boolean) => void
}

export const ModalWrapper = ({
  modalAccount,
  setModalAccount,
  modalRules,
  setModalRules,
  modalConnect,
  setModalConnect,
  modalStart,
  setModalStart,
}: modalWrapperT): JSX.Element => {
  const { t } = useTranslation(['error'])

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
      <ModalStart modalStart={modalStart} setModalStart={setModalStart} />
      <ModalConnect
        setModalConnect={setModalConnect}
        modalConnect={modalConnect}
        validateInput={validateInput}
      />
      <ModalAccount
        modalAccount={modalAccount}
        setModalAccount={setModalAccount}
        validateInput={validateInput}
      />
      <ModalRules modalRules={modalRules} setModalRules={setModalRules} />
    </>
  )
}
