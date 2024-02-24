import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Footer } from 'components'

import 'react-toastify/dist/ReactToastify.css'
import './settings/i18n.ts'
import { router } from './routes'

function Application() {
  return (
    <div className={'wrapper'}>
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
    </div>
  )
}

export default Application
