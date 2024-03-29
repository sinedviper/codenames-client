import { useLocation, useOutlet } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import { BlobAnimation, OrbitAnimation } from 'components'
import { routes } from 'application/routes'

import s from './styles.module.css'

export function PageWrapper(): JSX.Element {
  const { pathname } = useLocation()
  const currentOutlet = useOutlet()

  const { nodeRef } = routes.find(({ path }) => path === pathname) ?? {}

  const typeColorBlob1 = () => {
    if (pathname.includes('login')) {
      return { first: '--appear', second: '--appear' }
    }
    if (pathname.includes('registration')) {
      return { first: '--appear', second: '--appear' }
    }
    if (pathname.includes('connect')) {
      return { first: '--danger', second: '--danger' }
    }
    if (pathname.includes('rules')) {
      return { first: '--primary', second: '--primary' }
    }
    if (pathname.includes('create')) {
      return { first: '--primary', second: '--primary' }
    }
    if (pathname.includes('profile')) {
      return { first: '--danger', second: '--danger' }
    }
    return { first: '--primary', second: '--primary' }
  }

  const typeColorBlob2 = () => {
    if (pathname.includes('login')) {
      return { first: '--warning', second: '--warning' }
    }
    if (pathname.includes('registration')) {
      return { first: '--accent', second: '--accent' }
    }
    if (pathname.includes('connect')) {
      return { first: '--warning', second: '--warning' }
    }
    if (pathname.includes('rules')) {
      return { first: '--secondary', second: '--secondary' }
    }
    if (pathname.includes('create')) {
      return { first: '--light', second: '--light' }
    }
    if (pathname.includes('profile')) {
      return { first: '--light', second: '--light' }
    }
    return { first: '--appear', second: '--appear' }
  }

  return (
    <main className={s.wrapper}>
      <SwitchTransition>
        <CSSTransition
          key={pathname}
          nodeRef={nodeRef}
          timeout={400}
          classNames={'page'}
          unmountOnExit
        >
          {() => (
            <section ref={nodeRef} className='main'>
              {currentOutlet}
            </section>
          )}
        </CSSTransition>
      </SwitchTransition>
      <BlobAnimation id={'blob_1'} className={s.blob_1} colorBlob={typeColorBlob1()} />
      <BlobAnimation id={'blob_2'} className={s.blob_2} colorBlob={typeColorBlob2()} />
      <OrbitAnimation className={s.orbit_1} />
      <OrbitAnimation className={s.orbit_2} />
      <OrbitAnimation className={s.orbit_3} />
    </main>
  )
}
