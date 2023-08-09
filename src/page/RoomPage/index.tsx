import React from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { MainComponent } from 'components'
import { useAppSelector } from 'utils/hooks'
import { getUser } from 'store/select'

import s from './styles.module.css'

export function RoomPage(): JSX.Element {
  const { t } = useTranslation(['main', 'error'])

  const user = useAppSelector(getUser)

  return <MainComponent>3</MainComponent>
}
