import { Icon } from '@phosphor-icons/react'
import styles from './styles.module.css'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: Icon
}

export function Input({ label, icon: Icon, ...props }: InputProps) {
  return (
    <>
      {label && (
        <label className={styles.label} htmlFor={label}>
          {label}
        </label>
      )}
      <div className={styles.wrapperInput}>
        {Icon && <Icon />}
        <input {...props} className={styles.input} id={label} />
      </div>
    </>
  )
}
