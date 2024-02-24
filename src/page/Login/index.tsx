import { useNavigate } from 'react-router-dom'

import { Button, TextHeader } from 'components'
import { SvgArrow } from 'assets/svg'

import s from './styles.module.css'

export const Login = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    <div className={s.wrapper_login}>
      <Button variant={'none'} className={s.btn_back} onClick={() => navigate('/')}>
        <div className={s.svg_back}>
          <SvgArrow />
        </div>
      </Button>
      <TextHeader type={'h2'}>Login</TextHeader>
    </div>
  )
}
