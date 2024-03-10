export type TUser = {
  username: string
  color: string
  avatar: null | { id: number; path: string }
  status: null | string
  id: number
  scores: number
  wins: number
  lose: number
  createdAt: Date
  date_recover: Date
  id_type: {
    id: number
    type: 'user'
    createdAt: Date
  }
}

export interface IResLogin {
  accessToken: string
}
