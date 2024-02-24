import { createRef } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { PageWrapper } from 'components'
import { Home, Login } from 'page'

export const routes = [
  { path: '/', element: <Home />, nodeRef: createRef<HTMLDivElement>() },
  { path: '/login', element: <Login />, nodeRef: createRef<HTMLDivElement>() },
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
