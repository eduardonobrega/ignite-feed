import { Trash, ThumbsUp } from '@phosphor-icons/react';
import styles from './styles.module.css';
import { Avatar } from '../Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/eduardonobrega.png" />

      <div className={styles.wrapper}>
        <div className={styles.commentBox}>
          <header>
            <div className={styles.authorAndTimer}>
              <strong>Eduardo Nóbrega</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 2h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
