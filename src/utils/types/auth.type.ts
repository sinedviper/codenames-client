export type User = {
  username: string
  color: string
  avatar: null | string
  status: null | string
  id: number
  scores: number
  wins: number
  lose: number
  createdAt: Date
  id_type: {
    id: number
    type: 'user'
    createdAt: Date
  }
}

export interface resLogin {
  accessToken: string
}
