import { TResponse } from '../types'

export const transformErrorResponse = <Response>(res: TResponse<Response>) => {
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
