import { ReactNode } from 'react'
import { useAppSelector } from '../utils/hooks'
import { getAuth } from '../store/reducers/auth'
import { Navigate } from 'react-router-dom'

interface Props {
  children: ReactNode
  checkToken?: boolean
}

export const WrapAuth = ({ children, checkToken = false }: Props): ReactNode | JSX.Element => {
  const { token } = useAppSelector(getAuth)

  if (!token && !checkToken) {
    return <Navigate to={'/login'} replace />
  }

  if (token && checkToken) {
    return <Navigate to={'/'} replace />
  }

  return children
}
