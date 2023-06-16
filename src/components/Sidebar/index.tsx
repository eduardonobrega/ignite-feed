import { Profile } from '../Profile'
import { PencilSimpleLine } from '@phosphor-icons/react'
import styles from './styles.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
        alt=""
      />
      <Profile
        user={{
          name: 'Eduardo Nóbrega',
          avatarUrl: 'https://github.com/eduardonobrega.png',
          occupation: 'Web Developer',
        }}
        column
      />

      <footer>
        <a href="#">
          <PencilSimpleLine />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
