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
    return { first: '--primary', second: '--primary' }
  }

  const typeColorBlob2 = () => {
    return { first: '--appear', second: '--appear' }
  }

  return (
    <div className={s.wrapper}>
      <SwitchTransition>
        <CSSTransition
          key={pathname}
          nodeRef={nodeRef}
          timeout={400}
          classNames={'page'}
          unmountOnExit
        >
          {() => (
            <main ref={nodeRef} className='main'>
              {currentOutlet}
            </main>
          )}
        </CSSTransition>
      </SwitchTransition>
      <BlobAnimation id={'blob_1'} className={s.blob_1} colorBlob={typeColorBlob1()} />
      <BlobAnimation id={'blob_2'} className={s.blob_2} colorBlob={typeColorBlob2()} />
      <OrbitAnimation className={s.orbit_1} />
      <OrbitAnimation className={s.orbit_2} />
      <OrbitAnimation className={s.orbit_3} />
    </div>
  )
}
