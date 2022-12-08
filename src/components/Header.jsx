import { Rocket } from 'phosphor-react'
import styles from './Header.module.css'


export function Header() {
  return(
    <div className={styles.header} >
      <div>
        <Rocket className={styles.icon} size={30} />
        <p>to<span>do</span></p>
      </div>
    </div>
  )
}