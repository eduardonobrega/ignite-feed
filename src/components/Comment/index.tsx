import { useState } from 'react'
import { Avatar } from '../Avatar'
import styles from './styles.module.css'
import { Trash, ThumbsUp } from '@phosphor-icons/react'
import { User } from '../Post'

interface CommentProps {
  author: User
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ author, content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((prevState) => ++prevState)
  }

  return (
    <div className={styles.comment}>
      <Avatar src={author.avatarUrl} />
      <div className={styles.wrapper}>
        <div className={styles.commentBox}>
          <header>
            <div className={styles.authorAndTimer}>
              <strong>{author.name}</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 2h
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash />
            </button>
          </header>
          <p>{content}</p>
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
