import styles from './styles.module.css'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <input {...props} className={styles.input} id={label} />
    </div>
  )
}
