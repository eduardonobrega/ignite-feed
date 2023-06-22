import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import styles from './styles.module.css'
import igniteLogo from '../../assets/igniteLogo.svg'

export function SignIn() {
  return (
    <div className={styles.containerForm}>
      <form className={styles.loginForm}>
        <header>
          <img src={igniteLogo} alt="" />
          <h1>Crie sua conta</h1>
        </header>
        <Input
          label="Seu nome"
          type="text"
          placeholder="Maria da Silva"
          required
        />
        <Input
          label="Email"
          type="email"
          placeholder="exemplo@exemplo.com.br"
          required
        />
        <Input
          label="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          required
        />
        <Button title="Criar conta" />
        <a href="#">Já tenho uma conta</a>
      </form>
    </div>
  )
}
