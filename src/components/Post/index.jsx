import { Profile } from '../Profile';

import styles from './styles.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <Profile
          avatar="https://github.com/diego3g.png"
          name="Diego Fernandes"
          occupation="CTO at Rocketseat"
        />

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
          Públicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifolio. É um projeto que
          fiz no NLW Return, evento da Rocketseat. O nome do projeto é
          DoctorCare 🚀
        </p>

        <p>
          👉 &nbsp;<a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a>
          <a href="#"> &nbsp;#nlw</a>
          <a href="#"> &nbsp;#rocketseat</a>
        </p>
      </div>

      <form className={styles.form}>
        <label htmlFor="feedback">Deixe seu feedback</label>
        <textarea id="feedback" placeholder="Escreva um comentário..." />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
    </article>
  );
}
