import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'
import ptBR from 'date-fns/locale/pt-BR'
import { format, formatDistanceToNow } from 'date-fns'

import { Comment, CommentType } from '../Comment'
import { Profile } from '../Profile'

import styles from './styles.module.css'
import { Button } from '../Button'

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
  const [comments, setComments] = useState<CommentType[]>([])
  const [newComment, setNewComment] = useState<string>('')

  const user: User = {
    name: 'Mayk Brito',
    avatarUrl: 'https://github.com/maykbrito.png',
    occupation: 'teacher in @Rocketseat',
  }

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
    setComments((prevState) => [
      { author: user, content: newComment, publishedAt: new Date() },
      ...prevState,
    ])
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
      prevState.filter((comment) => comment.content !== commentDeleted),
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
          <Button title="Comentar" type="submit" disabled={isNewCommentEmpty} />
        </footer>
      </form>

      <div>
        {comments.map((comment) => (
          <Comment
            comment={comment}
            onDeleteComment={deleteComment}
            key={comment.content}
          />
        ))}
      </div>
    </div>
  )
}
