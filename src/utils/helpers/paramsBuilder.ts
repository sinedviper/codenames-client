import { FocusEvent } from 'react'
import { FormikProps } from 'formik'

type paramsType<T> = {
  values: string
  formik: FormikProps<T>
}

type returnParams<Value> = {
  id: string
  name: string
  onChange: (value?: { target: { id?: string; name?: string; value: Value } }) => void
  value: Value
  error: string
  onBlur: (value?: FocusEvent<HTMLInputElement>) => void
}

export const paramsBuilder = <InitialFormik, Value>({
  values,
  formik,
}: paramsType<InitialFormik>): returnParams<Value> => {
  return {
    id: values,
    name: values,
    onChange: formik.handleChange,
    value: formik.values[values],
    error: formik.errors[values],
    onBlur: formik.handleBlur,
  }
}
