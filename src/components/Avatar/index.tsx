import { ImgHTMLAttributes } from 'react'

import styles from './styles.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

export function Avatar({ hasBorder = false, alt = '', ...props }: AvatarProps) {
  return (
    <img
      className={`${styles.avatar} ${hasBorder && styles.withBorder}`}
      alt={alt}
      {...props}
    />
  )
}
