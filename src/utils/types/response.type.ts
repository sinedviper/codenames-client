export type responseType<T> =
  | {
      data: T
      status: 200
    }
  | {
      data: T
      status: 201
    }
  | {
      data: { message: string }
      status: 400 | 401 | 404 | 406 | 417 | 500
    }
