import styles from './styles.module.css'
import IgniteLogo from '../../assets/igniteLogo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Logo do ignite" />
      <h1>Ignite Feed</h1>
    </header>
  )
}
