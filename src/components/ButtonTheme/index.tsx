import React from 'react'
import cn from 'classnames'

import { SvgDark, SvgLight } from 'assets/svg'
import { actionChangeTheme } from 'store/slice'
import { useAppDispatch, useAppSelector } from 'utils/hooks'
import { getTheme } from 'store/select'

import ButtonThemeProps from './types.props'
import styles from './styles.module.css'

export const ButtonTheme = ({ className, ...props }: ButtonThemeProps): JSX.Element => {
  const dispatch = useAppDispatch()

  const theme = useAppSelector(getTheme)

  const handleChangeTheme = () => {
    dispatch(actionChangeTheme(!theme))
  }

  return (
    <button className={cn(styles.button, className)} onClick={handleChangeTheme} {...props}>
      {theme ? <SvgDark /> : <SvgLight />}
    </button>
  )
}
