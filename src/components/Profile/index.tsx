import { Avatar } from '../Avatar'
import styles from './styles.module.css'
import { User } from '../Post'

interface ProfileProps {
  column?: boolean
  user: User
}

export function Profile({ column = false, user }: ProfileProps) {
  return (
    <div className={`${styles.profile} ${column && styles.column}`}>
      <Avatar hasBorder src={user.avatarUrl} />
      <div className={styles.userInfo}>
        <strong>{user.name}</strong>
        <span>{user.occupation}</span>
      </div>
    </div>
  )
}
