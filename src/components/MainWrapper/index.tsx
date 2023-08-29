import React from 'react'
import { Outlet, useLocation, useOutlet } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import { MainComponent, BlobAnimation } from 'components'

import s from './styles.module.css'
import { routes } from '../../App'

export function MainWrapper(): JSX.Element {
  const location = useLocation()
  const currentOutlet = useOutlet()

  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {}

  return (
    <MainComponent center={true}>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames={'page'}
          unmountOnExit
        >
          {(state) => (
            //@ts-ignore
            <div ref={nodeRef} className='page'>
              {currentOutlet}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
      <BlobAnimation
        id={'blob_1'}
        className={s.blob_1}
        colorBlob={{ first: '--secondary', second: '--blue' }}
      />
    </MainComponent>
  )
}
