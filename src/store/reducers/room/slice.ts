import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { ICountWords, ILanguages } from 'utils/interfaces'
import { createParams } from './api.ts'

type initialType = {
  status: 'idle' | 'fulfilled' | 'rejected' | 'pending'
  languages: ILanguages[]
  words: ICountWords[]
}

const initialState: initialType = {
  status: 'idle',
  languages: [],
  words: [],
}

interface TRoomGetCreateParams {
  languages: ILanguages[]
  words: ICountWords[]
}

export const roomReducer = createSlice({
  name: 'room',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(createParams.matchRejected, roomRejected).addMatcher(
      createParams.matchFulfilled,
      // @ts-ignore
      (state: initialType, action: PayloadAction<TRoomGetCreateParams>) => {
        state.words = action.payload.words
        state.languages = action.payload.languages
      },
    )
  },
})

const roomRejected = (state: initialType, { payload }: PayloadAction<unknown>) => {
  state.status = 'rejected'
  toast.error(payload as string)
}
