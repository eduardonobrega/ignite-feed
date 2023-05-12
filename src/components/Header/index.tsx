import styles from './styles.module.css';
import logo from '../../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo do ignite" />
      <h1>Ignite Feed</h1>
    </header>
  );
}
