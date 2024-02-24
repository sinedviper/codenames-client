import { FormikProps } from 'formik'

type paramsType <T> = {
  values: string,
  formik: FormikProps<T>
}

type returnParams <T> = {
  id: string,
  name: string,
  onChange: (v: any) => void,
  value: T
}

export const paramsBuilder = <T, O>({values, formik}: paramsType<T>): returnParams<O> => {
  return {
    id: values,
    name: values,
    onChange: formik.handleChange,
    value: formik.values[values]
  }
}