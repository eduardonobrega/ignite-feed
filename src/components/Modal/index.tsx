import { useState } from 'react'
import styles from './styles.module.css'

export function Modal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      {isOpen && (
        <div className={styles.modalWrapper}>
          <div className={styles.modal}>
            <h2>Excluir comentário</h2>
            <p>Você tem certeza que gostaria de excluir este comentário?</p>
            <div className={styles.buttons}>
              <button onClick={closeModal}>Cancelar</button>
              <button onClick={closeModal}>Sim, excluir</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
