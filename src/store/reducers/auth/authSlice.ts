import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { jwtDecode } from 'jwt-decode'

import { loginAuth, registrationAuth } from './authApi'
import { resLogin, User } from 'utils/types'

type initialType = {
  status: 'idle' | 'fulfilled' | 'rejected' | 'pending'
  user: null | User
  token: string | null
  sound: boolean
  animation: boolean
}

const initialState: initialType = {
  user: null,
  token: null,
  status: 'idle',
  animation: true,
  sound: true,
}

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
    setSound: (state: initialType, { payload }: PayloadAction<boolean>) => {
      state.sound = payload
    },
    setAnimation: (state: initialType, { payload }: PayloadAction<boolean>) => {
      state.animation = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(loginAuth.matchPending, authPending)
      .addMatcher(loginAuth.matchFulfilled, authFulfilled)
      .addMatcher(loginAuth.matchRejected, authRejected)
      .addMatcher(registrationAuth.matchPending, authPending)
      .addMatcher(registrationAuth.matchFulfilled, authFulfilled)
      .addMatcher(registrationAuth.matchRejected, authRejected)
  },
})

const authPending = (state: initialType) => {
  state.status = 'pending'
}

const authFulfilled = (state: initialType, { payload }: PayloadAction<resLogin>) => {
  state.user = jwtDecode(payload.accessToken).sub as unknown as User
  state.token = payload?.accessToken
  state.status = 'fulfilled'
}

const authRejected = (state: initialType, { payload }: PayloadAction<unknown>) => {
  state.status = 'rejected'
  toast.error(payload as string)
}

export const { logout, setSound, setAnimation } = authReducer.actions
