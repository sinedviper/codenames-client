import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { MainPage, RoomPage, RulesPage } from 'page'
import { FooterComponent } from 'pages-components'
import { MainWrapper } from 'components'

import 'react-toastify/dist/ReactToastify.css'
import './i18n'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainWrapper />,
    children: [
      { index: true, path: '/', element: <MainPage /> },
      { path: 'rules', element: <RulesPage /> },
      { path: 'profile', element: <></> },
      { path: 'start', element: <></> },
      { path: 'connect', element: <></> },
    ],
  },
  {
    path: '/room/:room',
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
