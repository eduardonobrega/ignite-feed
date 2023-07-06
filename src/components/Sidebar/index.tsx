import { Profile } from '../Profile'
import { PencilSimpleLine, Plus } from '@phosphor-icons/react'
import styles from './styles.module.css'
import { User } from '../Post'
import { NavLink } from 'react-router-dom'

export function Sidebar() {
  const user: User = {
    name: 'Mayk Brito',
    avatarUrl: 'https://github.com/maykbrito.png',
    occupation: 'teacher in @Rocketseat',
  }
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
        alt=""
      />
      <Profile user={user} column />

      <footer>
        <NavLink to="/new" className={styles.newPostButton}>
          <Plus />
          New Post
        </NavLink>
        <NavLink to="/profile" className={styles.editButton}>
          <PencilSimpleLine />
          Editar seu perfil
        </NavLink>
      </footer>
    </aside>
  )
}
