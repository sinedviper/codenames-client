import React from 'react'
import cn from 'classnames'

import { Button } from '../Button'
import { SvgTranslate } from 'assets/svg'

import CardWordProps from './types.props'
import s from './styles.module.css'

export const CardWord = ({ className, word, userType, ...props }: CardWordProps) => {
  const stylesCardWord = cn(className, s.word_wrapper, {
    [s.red_word]: word.type === 'red',
    [s.grey_word]: word.type === 'grey',
    [s.blue_word]: word.type === 'blue',
    [s.black_word]: word.type === 'black',
    [s.default]: userType,
  })

  return (
    <div className={stylesCardWord} {...props}>
      <p className={s.text_word}>{word.text}</p>
      <Button className={s.btn_translate} color={'none'}>
        <SvgTranslate />
      </Button>
      {/*<div className={s.pick_users}>*/}
      {/*  <span className={s.pick} style={{ borderColor: 'var(--red)' }} />*/}
      {/*  <span className={s.pick} style={{ borderColor: 'var(--yellow)' }} />*/}
      {/*  <span className={s.pick} style={{ borderColor: 'var(--pink)' }} />*/}
      {/*  <span className={s.pick} style={{ borderColor: 'var(--purple)' }} />*/}
      {/*  <span className={s.pick} style={{ borderColor: 'var(--green)' }} />*/}
      {/*</div>*/}
    </div>
  )
}
