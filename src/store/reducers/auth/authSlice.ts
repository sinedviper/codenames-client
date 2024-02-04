import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { jwtDecode } from 'jwt-decode'

import { loginAuth } from './authApi'
import { resLogin, User } from 'utils/types'

type initialType = {
  status: 'idle' | 'fulfilled' | 'rejected' | 'pending'
  user: null | User
  token: string | null
}

const initialState: initialType = {
  user: null,
  token: null,
  status: 'idle',
}

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(loginAuth.matchPending, (state: initialType) => {
        state.status = 'pending'
      })
      .addMatcher(
        loginAuth.matchFulfilled,
        (state: initialType, { payload }: PayloadAction<resLogin>) => {
          state.user = jwtDecode(payload.accessToken).sub as unknown as User
          state.token = payload?.accessToken
          state.status = 'fulfilled'
        },
      )
      .addMatcher(
        loginAuth.matchRejected,
        (state: initialType, { payload }: PayloadAction<unknown>) => {
          state.status = 'rejected'
          toast.error(payload as string)
        },
      )
  },
})

export const { logout } = authReducer.actions
