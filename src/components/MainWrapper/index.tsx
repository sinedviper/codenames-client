import React from 'react'
import { Outlet } from 'react-router-dom'

import { MainComponent, BlobAnimation } from 'components'

import s from './styles.module.css'

export function MainWrapper(): JSX.Element {
  return (
    <MainComponent center={true}>
      <div className={s.menu}>
        <Outlet />
      </div>
      <BlobAnimation
        id={'blob_1'}
        className={s.blob_1}
        colorBlob={{ first: '--secondary', second: '--blue' }}
      />
    </MainComponent>
  )
}
