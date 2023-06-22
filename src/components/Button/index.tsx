import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <button {...props} className={styles.button}>
      {title}
    </button>
  )
}
