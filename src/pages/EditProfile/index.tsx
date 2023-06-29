import { ArrowCircleLeft, Envelope, Keyhole, User } from '@phosphor-icons/react'
import { Avatar } from '../../components/Avatar'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import styles from './styles.module.css'
import { UploadButton } from './uploadButton'
import { NavLink } from 'react-router-dom'

export function EditProfile() {
  return (
    <div className={styles.profileContainer}>
      <NavLink to="/">
        <ArrowCircleLeft />
      </NavLink>
      <form className={styles.form}>
        <div className={styles.inputBanner}>
          <img
            src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
            alt=""
          />

          <UploadButton />
        </div>

        <div className={styles.inputAvatar}>
          <Avatar
            src="https://github.com/eduardonobrega.png"
            alt={`Foto de perfil de Eduardo`}
          />

          <UploadButton />
        </div>

        <div className={styles.userInfo}>
          <Input placeholder="João da Silva" icon={User} />
          <Input placeholder="joao@emai.com" icon={Envelope} />
          <Input placeholder="Senha atual" icon={Keyhole} />
          <Input placeholder="Nova senha" icon={Keyhole} />
          <Button title="Salvar" />
        </div>
      </form>
    </div>
  )
}
