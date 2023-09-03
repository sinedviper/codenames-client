import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'
import { toast } from 'react-toastify'

import { Button, CardTeam, CardWord, MainComponent } from 'components'
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
        <Button className={s.setting}>
          <SvgSettings />
        </Button>
        <Button className={s.exit} onClick={() => navigate('/')}>
          <SvgExit />
        </Button>
        <Button
          className={cn(s.play, {
            [s.stop]: playBtn,
          })}
          onClick={handlePlay}
        >
          {playBtn ? <SvgPause /> : <SvgPlay />}
        </Button>
        <Button className={s.reset} disabled={!playBtn}>
          <SvgReset />
        </Button>
      </section>
      <section className={s.wrapper_middle}>
        <CardTeam team={'blue'} leader={'Sinedviper'} users={users} listAnswer={listAnswer} />
        <section className={s.wrapper_words}>
          {words.map((word, key) => (
            <CardWord key={key} word={word} userType={true} />
          ))}
          <div className={s.shadow_word}></div>
        </section>
        <CardTeam team={'red'} leader={'Sinedviper'} users={users} listAnswer={listAnswer} />
      </section>
    </MainComponent>
  )
}

const listAnswer = ['words - 5', 'words - 2', 'words - 3']

const words: { text: string; type: 'red' | 'blue' | 'black' | 'grey' }[] = [
  { text: 'hew', type: 'red' },
  { text: 'sink', type: 'blue' },
  { text: 'grow', type: 'blue' },
  { text: 'rise', type: 'red' },
  { text: 'arise', type: 'blue' },
  { text: 'fly', type: 'red' },
  { text: 'hew', type: 'black' },
  { text: 'sink', type: 'grey' },
  { text: 'satisfying', type: 'red' },
  { text: 'waitress', type: 'grey' },
  { text: 'black desk', type: 'blue' },
  { text: 'stolen', type: 'grey' },
  { text: 'human', type: 'grey' },
  { text: 'team', type: 'grey' },
  { text: 'leader', type: 'blue' },
  { text: 'red', type: 'red' },
]

const users = [
  { id: 1, name: 'User' },
  { id: 1, name: 'User' },
  { id: 1, name: 'User' },
  { id: 1, name: 'User' },
  { id: 1, name: 'User' },
]
