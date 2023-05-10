import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Comment } from '../Comment';
import { Profile } from '../Profile';

import styles from './styles.module.css';

export function Post({ author, content, publishedAt }) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true})
  
  return (
    <article className={styles.post}>
      <header>
        <Profile
          avatar={author.avatarUrl}
          name={author.name}
          occupation={author.occupation}
        />

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content?.map((item, index) => {
          if (item.type === 'paragraph') {
            return <p key={String(index)}>{item.info}</p>;
          } else {
            return (
              <p key={String(index)}>
                <a href="#">👉 {item.info}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.form}>
        <label htmlFor="feedback">Deixe seu feedback</label>
        <textarea id="feedback" placeholder="Escreva um comentário..." />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.comments}>
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
