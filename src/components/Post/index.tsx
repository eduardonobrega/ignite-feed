import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'
import ptBR from 'date-fns/locale/pt-BR'
import { format, formatDistanceToNow } from 'date-fns'

import { Comment } from '../Comment'
import { Profile } from '../Profile'

import styles from './styles.module.css'

export interface User {
  name: string
  occupation: string
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link'
  info: string
}

export interface PostType {
  id: number
  author: User
  publishedAt: Date
  content: Content[]
}

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState<string[]>([])
  const [newComment, setNewComment] = useState<string>('')

  const isNewCommentEmpty = newComment.length === 0

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH':'mm'h'",
    {
      locale: ptBR,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    setComments((prevState) => [newComment, ...prevState])
    setNewComment('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')

    setNewComment(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  function deleteComment(commentDeleted: string) {
    setComments((prevState) =>
      prevState.filter((comment) => comment !== commentDeleted),
    )
  }

  return (
    <div className={styles.post}>
      <div className={styles.postInfo}>
        <Profile user={post.author} />
        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </div>

      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.info}>{line.info}</p>
          } else {
            return (
              <p key={line.info}>
                <a href="#">👉 {line.info}</a>
              </p>
            )
          }
        })}
      </div>

      <form className={styles.form} onSubmit={handleCreateNewComment}>
        <label htmlFor="commentInput">Deixe seu feedback</label>
        <textarea
          id="commentInput"
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

      <div>
        {comments.map((comment) => (
          <Comment
            author={{
              name: 'Mayk Brito',
              avatarUrl: 'https://github.com/maykbrito.png',
              occupation: 'teacher in @Rocketseat',
            }}
            content={comment}
            onDeleteComment={deleteComment}
            key={comment}
          />
        ))}
      </div>
    </div>
  )
}
