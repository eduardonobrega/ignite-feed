import { GithubLogo, RocketLaunch } from '@phosphor-icons/react'
import { BackButton } from '../../components/BackButton'
import { Input } from '../../components/Input'
import styles from './styles.module.css'
import { Button } from '../../components/Button'

export function NewPost() {
  return (
    <div className={styles.newPostContainer}>
      <BackButton pagePath="/" />
      <form action="">
        <h1>Novo Post</h1>
        <textarea
          placeholder="Fale sobre seu projeto"
          className={styles.textPost}
          required
        />
        <Input
          type="url"
          placeholder="https://github.com/usuario/repositorio"
          icon={GithubLogo}
        />

        <Input
          type="url"
          placeholder="https://deploy.com"
          icon={RocketLaunch}
        />
        <Button title="Publicar" type="submit" />
      </form>
    </div>
  )
}
