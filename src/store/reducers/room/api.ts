import { api } from 'store/services/api'
import { transformErrorResponse, transformResponse } from 'utils/helpers'
import { ICountWords, ILanguages } from 'utils/interfaces'

type IResGetCreateParams = { languages: ILanguages[]; countWords: ICountWords[] }

export const roomApi = api.injectEndpoints({
  endpoints: (build) => ({
    createParams: build.mutation<IResGetCreateParams, null>({
      query: () => ({
        url: 'room/create-params',
        method: 'GET',
      }),
      transformErrorResponse,
      transformResponse,
    }),
  }),
})

export const { useCreateParamsMutation } = roomApi

export const {
  endpoints: { createParams },
} = roomApi
