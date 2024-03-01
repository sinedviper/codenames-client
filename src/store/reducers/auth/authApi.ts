import { api } from 'store/services/api'
import { resLogin, TResponse, User } from 'utils/types'

export interface LoginUser {
  username: string
  password: string
}

export interface RegistrationUser extends LoginUser {
  color: string
}

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    registrationAuth: build.mutation<User, RegistrationUser>({
      query: (credentials: RegistrationUser) => ({
        url: 'auth/registration',
        method: 'POST',
        body: credentials,
      }),
    }),
    loginAuth: build.mutation<resLogin, LoginUser>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
      transformErrorResponse: (res: TResponse<resLogin>) => {
        if (
          res.status === 400 ||
          res.status === 401 ||
          res.status === 404 ||
          res.status == 406 ||
          res.status == 417 ||
          res.status == 500
        ) {
          return res.data.message
        }
      },
      transformResponse: (res: TResponse<resLogin>): resLogin => {
        return res.data as resLogin
      },
    }),
  }),
})

export const { useLoginAuthMutation, useRegistrationAuthMutation } = authApi

export const {
  endpoints: { registrationAuth, loginAuth },
} = authApi
