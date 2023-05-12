import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Comment } from '../Comment';
import { Profile } from '../Profile';

import styles from './styles.module.css';

interface Author {
  name: string;
  avatarUrl: string;
  occupation: string;
}

interface Content {
  type: 'paragraph' | 'link';
  info: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const isNewCommentEmpty = newComment.length === 0;

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    if (newComment == '') {
      return;
    }

    setComments((prevState) => [newComment, ...prevState]);
    setNewComment('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');

    setNewComment(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse Campo é obrigatório!');
  }

  function deleteComment(commentRemoved: string) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentRemoved
    );

    setComments(commentsWithoutDeletedOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <Profile
          avatar={post.author.avatarUrl}
          name={post.author.name}
          occupation={post.author.occupation}
        />

        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content?.map((item) => {
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
              occupation: 'teacher in @Rocketseat',
            }}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
