import { useState } from 'react'
import { formatDistanceToNow, format } from 'date-fns'
import { Trash, ThumbsUp } from '@phosphor-icons/react'

import { Avatar } from '../Avatar'
import { User } from '../Post'

import styles from './styles.module.css'
import { ptBR } from 'date-fns/locale'

export interface CommentType {
  author: User
  content: string
  publishedAt: Date
}

interface CommentProps {
  comment: CommentType
  onDeleteComment: (comment: string) => void
}

export function Comment({ comment, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(comment.content)
  }

  function handleLikeComment() {
    setLikeCount((prevState) => ++prevState)
  }

  const publishedDateFormatted = format(
    comment.publishedAt,
    "d 'de' LLLL 'às' HH':'mm'h'",
    {
      locale: ptBR,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(comment.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <div className={styles.comment}>
      <Avatar src={comment.author.avatarUrl} />
      <div className={styles.wrapper}>
        <div className={styles.commentBox}>
          <header>
            <div className={styles.authorAndTimer}>
              <strong>{comment.author.name}</strong>
              <time
                title={publishedDateFormatted}
                dateTime={comment.publishedAt.toISOString()}
              >
                {publishedDateRelativeToNow}
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash />
            </button>
          </header>
          <p>{comment.content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
