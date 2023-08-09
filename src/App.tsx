import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { MainPage, RoomPage } from 'page'

import './i18n'
import { FooterComponent } from 'pages-components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/:room',
    element: <RoomPage />,
  },
])

function App() {
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
        theme={'dark'}
      />
      <RouterProvider router={router} />
      <FooterComponent />
    </>
  )
}

export default App
