import React from 'react'
import cn from 'classnames'

import CardTeamProps from './types.props'
import s from './styles.module.css'
import { SvgPlus } from '../../assets/svg'

export const CardTeam = ({
  className,
  users,
  listAnswer,
  team,
  leader,
  ...props
}: CardTeamProps) => {
  return (
    <section
      className={cn(className, s.left_team, {
        [s.right_team]: team === 'red',
      })}
      {...props}
    >
      <p className={s.words}>9</p>
      <div className={s.leader}>
        <p className={s.title}>Лидер:</p>
        <div className={s.user}>
          <div className={s.img}></div>
          <div className={s.wrapper_info_user}>
            <p className={s.name}>{leader}</p>
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
          {users?.map((val, key) => (
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
          {listAnswer?.map((word, key) => (
            <p key={key} className={s.phrase}>
              {word}
            </p>
          ))}
        </div>
      </div>
      <div className={s.shadow}></div>
    </section>
  )
}
