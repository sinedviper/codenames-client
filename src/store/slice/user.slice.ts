import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  nickname: string
  color: string
  rules: boolean
}

const initialState: UserState = {
  nickname: '',
  color: '#000',
  rules: false,
}

export const userSlice = createSlice({
  name: '@@user',
  initialState,
  reducers: {
    actionClearUser: () => initialState,
    actionChangeUser: (
      state: Draft<UserState>,
      action: PayloadAction<Omit<UserState, 'rules'>>,
    ) => {
      state.nickname = action.payload.nickname
      state.color = action.payload.color
    },
    actionChangeRules: (state: Draft<UserState>, action: PayloadAction<boolean>) => {
      state.rules = action.payload
    },
  },
})

export const userReducer = userSlice.reducer

export const { actionClearUser, actionChangeUser, actionChangeRules } = userSlice.actions
