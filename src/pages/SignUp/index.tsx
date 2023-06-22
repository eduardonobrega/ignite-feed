import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import styles from './styles.module.css'
import igniteLogo from '../../assets/igniteLogo.svg'

export function SignUp() {
  return (
    <div className={styles.containerForm}>
      <form className={styles.loginForm}>
        <header>
          <img src={igniteLogo} alt="" />
          <h1>Faça Login</h1>
        </header>
        <Input
          label="Seu nome"
          type="text"
          placeholder="Maria da Silva"
          required
        />

        <Input
          label="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          required
        />
        <Button title="Entrar" />
        <a href="#">Criar uma conta</a>
      </form>
    </div>
  )
}
