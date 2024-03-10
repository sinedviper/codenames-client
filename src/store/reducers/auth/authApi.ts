import { api } from 'store/services/api'
import { IResLogin, TResponse } from 'utils/types'

export interface LoginUser {
  username: string
  password: string
}

export interface UpdateUser {
  id: number
  status?: string
  username?: string
  password?: string
  old_password?: string
  color?: string
  date_recover?: Date | null
}

export interface IUploadImage {
  image: FormData
}

export interface RegistrationUser extends LoginUser {
  color: string
  date_recover: Date
}

const transformErrorResponse = (res: TResponse<IResLogin>) => {
  if (
    res.status === 400 ||
    res.status === 401 ||
    res.status === 404 ||
    res.status === 406 ||
    res.status === 417 ||
    res.status === 409 ||
    res.status === 500
  ) {
    return res.data.message
  }
}

const transformResponse = (res: TResponse<IResLogin>): IResLogin => {
  return res.data as IResLogin
}

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    updateAuth: build.mutation<IResLogin, UpdateUser>({
      query: (credentials: UpdateUser) => ({
        url: 'auth/update',
        method: 'PATCH',
        body: credentials,
      }),
      transformErrorResponse,
      transformResponse,
    }),
    registrationAuth: build.mutation<IResLogin, RegistrationUser>({
      query: (credentials: RegistrationUser) => ({
        url: 'auth/registration',
        method: 'POST',
        body: credentials,
      }),
      transformErrorResponse,
      transformResponse,
    }),
    loginAuth: build.mutation<IResLogin, LoginUser>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
      transformErrorResponse,
      transformResponse,
    }),
    uploadImage: build.mutation<IResLogin, FormData>({
      query: (file) => ({
        url: 'images',
        method: 'POST',
        body: file,
      }),
      transformErrorResponse,
      transformResponse,
    }),
  }),
})

export const {
  useUploadImageMutation,
  useUpdateAuthMutation,
  useLoginAuthMutation,
  useRegistrationAuthMutation,
} = authApi

export const {
  endpoints: { uploadImage, registrationAuth, loginAuth, updateAuth },
} = authApi
