import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'
import { toast } from 'react-toastify'

import { Button, MainComponent } from 'components'
import { useAppSelector } from 'utils/hooks'
import { getUser } from 'store/select'

import s from './styles.module.css'
import { useNavigate } from 'react-router-dom'
import { SvgExit, SvgPause, SvgPlay, SvgPlus, SvgReset, SvgSettings } from '../../assets/svg'

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
        <section className={s.left_team}>
          <p className={s.words}>9</p>
          <div className={s.leader}>
            <p className={s.title}>Лидер:</p>
            <div className={s.user}>
              <div className={s.img}></div>
              <div className={s.wrapper_info_user}>
                <p className={s.name}>Sinedviper</p>
                <p className={s.balls_user}>120 побед</p>
              </div>
            </div>
            <button className={s.button_connect}>
              <SvgPlus />
            </button>
          </div>
          <div className={s.users_wrapper}>
            <p className={s.title}>Команда:</p>
            <div className={s.wrapper_list}>
              {users.map((val, key) => (
                <div key={key} className={s.user}>
                  <div className={s.img}></div>
                  <div className={s.wrapper_info_user}>
                    <p className={s.name}>{val.name}</p>
                    <p className={s.balls_user}>120 побед</p>
                  </div>
                </div>
              ))}
            </div>
            <button className={s.button_connect}>
              <SvgPlus />
            </button>
          </div>
          <div className={s.words_wrapper}>
            <p className={s.title}>Список загадываний:</p>
            <div className={s.list}>
              <p className={s.phrase}>ddddddddddddddddddddddddddddddd - 2</p>
              <p className={s.phrase}>ddddddddd - 2</p>
              <p className={s.phrase}>ddddddddd - 2</p>
              <p className={s.phrase}>ddddddddd - 2</p>
              <p className={s.phrase}>ddddddddd - 2</p>
            </div>
          </div>
          <div className={s.shadow}></div>
        </section>
        <section className={s.wrapper_words}>
          {words.map((word, key) => (
            <div key={key} className={s.word_wrapper}>
              {word + word + word + word + word}
            </div>
          ))}
          <div className={s.shadow_word}></div>
        </section>
        <section className={s.right_team}>
          <p className={s.words}>9</p>
          <div className={s.leader}>
            <p className={s.title}>Лидер</p>
            <div className={s.user}>
              <div className={s.img}></div>
              <p className={s.name}>SinedViper</p>
            </div>
          </div>
          <div className={s.users_wrapper}>
            <p className={s.title}>Команда</p>
            {users.map((val, key) => (
              <div key={key} className={s.user}>
                <div className={s.img}></div>
                <div className={s.wrapper_info_user}>
                  <p className={s.name}>{val.name}</p>
                  <p className={s.balls_user}>120 побед</p>
                </div>
              </div>
            ))}
          </div>
          <div className={s.words_wrapper}>
            <p className={s.title}>Список загадываний</p>
          </div>
          <div className={s.shadow}></div>
        </section>
      </section>
    </MainComponent>
  )
}

// <span className={s.line_horizontal} />
// <div className={s.wrapper_users}>
//   {users.map((val, index) => (
//     <div key={index} className={s.user}>
//       <div className={s.img}></div>
//       <p className={s.name}>{val.name}</p>
//     </div>
//   ))}
//   <span className={s.line_vertical} />
//   {users.map((val, index) => (
//     <div key={index} className={s.user}>
//       <div className={s.img}></div>
//       <p className={s.name}>{val.name}dddddddddddd</p>
//     </div>
//   ))}
// </div>
// <span className={s.line_horizontal} />

const words = [
  'words',
  'words',
  'words',
  'words',
  'words',
  'words',
  'words',
  'words',
  'words',
  'words',
  'words',
  'words',
  'words',
  'words',
  'words',
  'words',
]

const users = [
  { id: 1, name: 'User' },
  { id: 1, name: 'User' },
  { id: 1, name: 'User' },
  { id: 1, name: 'User' },
  { id: 1, name: 'User' },
]
