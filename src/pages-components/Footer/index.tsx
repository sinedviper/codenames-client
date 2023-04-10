import React from 'react'

import styles from './styles.module.css'

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Dinosaur. Усі права захищені.</p>
      <p>Гра створена Денисом та Іоанною. Гра поширюється безкоштовно.</p>
    </footer>
  )
}
