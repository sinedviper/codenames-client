import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { RootState } from '../'

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:4000/',
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set('Autorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 })

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Auth'],
  refetchOnReconnect: false,
  endpoints: () => ({}),
})
