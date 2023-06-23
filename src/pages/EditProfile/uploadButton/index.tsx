import { Camera } from '@phosphor-icons/react'
import styles from './styles.module.css'

export function UploadButton() {
  return (
    <label className={styles.uploadButton}>
      <Camera />
      <input type="file" className={styles['sr-only']} />
    </label>
  )
}
