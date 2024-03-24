import { api } from 'store/services/api'
import { IResLogin } from 'utils/types'
import { transformErrorResponse, transformResponse } from 'utils/helpers'

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

export interface RegistrationUser extends LoginUser {
  color: string
  date_recover: Date
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
    deleteImage: build.mutation<IResLogin, { id: number }>({
      query: (body) => ({
        url: 'images',
        method: 'DELETE',
        body,
      }),
      transformErrorResponse,
      transformResponse,
    }),
  }),
})

export const {
  useDeleteImageMutation,
  useUploadImageMutation,
  useUpdateAuthMutation,
  useLoginAuthMutation,
  useRegistrationAuthMutation,
} = authApi

export const {
  endpoints: { deleteImage, uploadImage, registrationAuth, loginAuth, updateAuth },
} = authApi
