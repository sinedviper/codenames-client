import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { Button, MainComponent } from 'components'
import { useAppSelector } from 'utils/hooks'
import { getUser } from 'store/select'

import s from './styles.module.css'
import { useNavigate } from 'react-router-dom'
import { SvgExit, SvgPause, SvgPlay, SvgReset, SvgSettings } from '../../assets/svg'

export function RoomPage(): JSX.Element {
  const navigate = useNavigate()
  const { t } = useTranslation(['main', 'error'])

  const [playBtn, setPlayBtn] = useState(false)

  const user = useAppSelector(getUser)

  const handlePlay = (): void => {
    setPlayBtn(!playBtn)
  }

  return (
    <MainComponent>
      <section className={s.wrapper_top}>
        <div className={s.wrapper_setting}>
          <Button className={s.btn} color={'yellow'}>
            <SvgSettings />
          </Button>
          <Button className={s.btn} color={playBtn ? 'orange' : 'green'} onClick={handlePlay}>
            {playBtn ? <SvgPause /> : <SvgPlay />}
          </Button>
          <Button className={s.btn} color={'purple'}>
            <SvgReset />
          </Button>
          <Button className={s.btn} color={'pink'} onClick={() => navigate('/')}>
            <SvgExit />
          </Button>
        </div>
        <span className={s.line_horizontal} />
        <div className={s.wrapper_users}>
          {users.map((val, index) => (
            <div key={index} className={s.user}>
              <div className={s.img}></div>
              <p className={s.name}>{val.name}</p>
            </div>
          ))}
          <span className={s.line_vertical} />
          {users.map((val, index) => (
            <div key={index} className={s.user}>
              <div className={s.img}></div>
              <p className={s.name}>{val.name}dddddddddddd</p>
            </div>
          ))}
        </div>
        <span className={s.line_horizontal} />
      </section>
      <section className={s.wrapper_middle}></section>
      <section className={s.wrapper_middle}></section>
    </MainComponent>
  )
}

const users = [
  { id: 1, name: 'User' },
  { id: 1, name: 'User' },
  { id: 1, name: 'User' },
  { id: 1, name: 'User' },
  { id: 1, name: 'User' },
]
