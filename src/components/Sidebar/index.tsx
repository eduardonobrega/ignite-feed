import { Profile } from '../Profile';
import stiles from './styles.module.css';
import { PencilSimpleLine } from '@phosphor-icons/react';

export function Sidebar() {
  return (
    <aside className={stiles.sidebar}>
      <img src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />

      <Profile
        className={stiles.profile}
        avatar="https://github.com/eduardonobrega.png"
        name="Eduardo Nóbrega"
        occupation="Web Developer"
      />

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
