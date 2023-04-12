import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { useAppSelector } from 'utils/hooks'
import { getTheme } from 'store/select'
import { MainPage } from 'page'

import './i18n'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/:room',
    element: <></>,
  },
])

function App() {
  const theme = useAppSelector(getTheme)

  useEffect(() => {
    document.body.dataset.theme = theme ? 'dark' : 'light'
  }, [theme])

  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <RouterProvider router={router} />
    </>
  )
}

export default App
