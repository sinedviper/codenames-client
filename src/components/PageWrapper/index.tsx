import React from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import { MainComponent, BlobAnimation } from 'components'

import s from './styles.module.css'
import { routes } from '../../App'

export function PageWrapper(): JSX.Element {
  const { pathname } = useLocation()
  const currentOutlet = useOutlet()

  const { nodeRef } = routes.find(({ path }) => path === pathname) ?? {}

  return (
    <MainComponent center={true}>
      <SwitchTransition>
        <CSSTransition
          key={pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames={'page'}
          unmountOnExit
        >
          {() => (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <div ref={nodeRef} className='page'>
              {currentOutlet}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
      {!pathname.includes('room') && (
        <BlobAnimation
          id={'blob_1'}
          className={s.blob_1}
          colorBlob={{ first: '--secondary', second: '--blue' }}
        />
      )}
    </MainComponent>
  )
}
