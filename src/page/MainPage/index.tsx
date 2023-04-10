import React from 'react'

import { FooterComponent } from 'pages-components'
import { MainComponent } from 'components'

import styles from './styles.module.css'

export default function MainPage(): JSX.Element {
  return (
    <>
      <MainComponent center={true}>main</MainComponent>
      <FooterComponent />
    </>
  )
}
