import { ArrowCircleLeft } from '@phosphor-icons/react'
import styles from './styles.module.css'
import { NavLink } from 'react-router-dom'

interface BackButtonProps {
  pagePath: string
}

export function BackButton({ pagePath }: BackButtonProps) {
  return (
    <NavLink to={pagePath} className={styles.backButtonContainer}>
      <ArrowCircleLeft />
    </NavLink>
  )
}
