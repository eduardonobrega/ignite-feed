import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Comment } from '../Comment';
import { Profile } from '../Profile';

import styles from './styles.module.css';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const isNewCommentEmpty = newComment.length === 0;

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(e) {
    e.preventDefault();
    if (newComment == '') {
      return;
    }

    setComments((prevState) => [newComment, ...prevState]);
    setNewComment('');
  }

  function handleNewCommentChange(e) {
    e.target.setCustomValidity('');

    setNewComment(e.target.value);
  }

  function handleNewCommentInvalid(e) {
    e.target.setCustomValidity('Esse Campo é obrigatório!');
  }

  function deleteComment(commentRemoved) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentRemoved
    );

    setComments(commentsWithoutDeletedOne);
  }

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
        {content?.map((item) => {
          if (item.type === 'paragraph') {
            return <p key={item.info}>{item.info}</p>;
          } else {
            return (
              <p key={item.info}>
                <a href="#">👉 {item.info}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.form} onSubmit={handleCreateNewComment}>
        <label htmlFor="feedback">Deixe seu feedback</label>
        <textarea
          id="feedback"
          placeholder="Escreva um comentário..."
          value={newComment}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.comments}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            author={{
              name: 'Mayk Brito',
              avatarUrl: 'https://github.com/maykbrito.png',
            }}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
