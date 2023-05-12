import { Trash, ThumbsUp } from '@phosphor-icons/react';
import styles from './styles.module.css';
import { Avatar } from '../Avatar';
import { useState } from 'react';

interface Author {
  name: string;
  avatarUrl: string;
  occupation: string;
}

interface CommentProps {
  author: Author;
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ author, content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((prevState) => ++prevState);
  }

  return (
    <div className={styles.comment}>
      <Avatar src={author.avatarUrl} alt="" />

      <div className={styles.wrapper}>
        <div className={styles.commentBox}>
          <header>
            <div className={styles.authorAndTimer}>
              <strong>{author.name}</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 2h atrás
              </time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
