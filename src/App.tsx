import React, { createRef } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { ConnectPage, MenuPage, RoomPage, RulesPage, AccountPage, StartPage } from 'page'
import { Footer } from 'pages-components'
import { PageWrapper } from 'components'

import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import './i18n'

export const routes = [
  { path: '/', element: <MenuPage />, nodeRef: createRef() },
  { path: '/rules', element: <RulesPage />, nodeRef: createRef() },
  { path: '/profile', element: <AccountPage />, nodeRef: createRef() },
  { path: '/start', element: <StartPage />, nodeRef: createRef() },
  { path: '/connect', element: <ConnectPage />, nodeRef: createRef() },
  { path: '/room/:room', element: <RoomPage />, nodeRef: createRef() },
]

const getRoute = (routes) =>
  routes?.map((route) => ({
    path: route.path,
    element: route.element,
  }))

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageWrapper />,
    children: getRoute(routes),
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
      <Footer />
    </>
  )
}

export default App
