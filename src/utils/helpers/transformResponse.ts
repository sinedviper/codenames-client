import { TResponse } from '../types'

export const transformResponse = <Response>(res: TResponse<Response>): Response => {
  return res.data as Response
}
