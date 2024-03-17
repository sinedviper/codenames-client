import z from 'zod'

export const schemaLogin = z
  .string({ required_error: 'requiredfields' })
  .min(3, 'min3sim')
  .max(20, 'max20sim')
  .regex(/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/, 'logvalidation')

export const schemaPassword = z
  .string({ required_error: 'requiredfields' })
  .min(6, 'min6sim')
  .max(20, 'max20sim')
  .regex(/^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$/, 'passvalidation')

export const schemaDate = z.custom<Date>(
  (val) => {
    if (!val) {
      return false
    }
    const date = new Date(val as string).toTimeString()
    return !!date
  },
  { message: 'requiredfields' },
)

export const schemaColor = z.custom(
  (color) => {
    const col = color as string
    if (!col || col?.trim() === '' || col?.length !== 7) {
      return false
    }
    return true
  },
  { message: 'requiredfields' },
)
