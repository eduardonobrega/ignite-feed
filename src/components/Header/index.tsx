import styles from './styles.module.css'
import igniteLogo from '../../assets/igniteLogo.svg'
import { NavLink } from 'react-router-dom'
import { Power } from '@phosphor-icons/react'

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={igniteLogo} alt="Logo do ignite" />
        <h1>Ignite Feed</h1>
      </div>

      <NavLink to="/">
        <Power />
      </NavLink>
    </header>
  )
}
