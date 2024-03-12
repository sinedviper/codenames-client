import { createRef } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Connect, Create, Home, Login, Profile, Registration, Rules } from 'page'
import { PageWrapper, WrapAuth } from 'components'

export const routes = [
  { path: '/', element: <Home />, nodeRef: createRef<HTMLDivElement>() },
  {
    path: '/login',
    element: (
      <WrapAuth checkToken={true}>
        <Login />
      </WrapAuth>
    ),
    nodeRef: createRef<HTMLDivElement>(),
  },
  { path: '/registration', element: <Registration />, nodeRef: createRef<HTMLDivElement>() },
  {
    path: '/profile',
    element: (
      <WrapAuth>
        <Profile />
      </WrapAuth>
    ),
    nodeRef: createRef<HTMLDivElement>(),
  },
  { path: '/rules', element: <Rules />, nodeRef: createRef<HTMLDivElement>() },
  {
    path: '/connect',
    element: (
      <WrapAuth>
        <Connect />
      </WrapAuth>
    ),
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: '/create',
    element: (
      <WrapAuth>
        <Create />
      </WrapAuth>
    ),
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: '/game',
    element: (
      <WrapAuth>
        <div />
      </WrapAuth>
    ),
    nodeRef: createRef<HTMLDivElement>(),
  },
]

const getRoute = (routes) =>
  routes?.map((route) => ({
    path: route.path,
    element: route.element,
  }))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageWrapper />,
    children: getRoute(routes),
  },
])
