import styles from './style.module.scss'
import styleUtils from '../../styles/utils.module.scss'

interface props {
  className?: string,
  fixed?: boolean
}

export const Header = ({ className = '', fixed }: props) => {
  const isFixed = fixed ? styleUtils : '';

  return (
    <header className={`${styles.container} ${isFixed} ${className}`}>
      <div className={styles.container_logoContainer}>
        {/* Se for uma imagem e não um SVG, usar a tag <Image> */}
        <img alt='Self Wiser' className={styles.container__logo}></img>
      </div>
      <nav className={styles.container_nav}>
        {/* Quando tiver as paginas abaixo usar a tag <Link> */}
        <a className={styles.container_nav_topic}>Artigos</a>
        <a className={styles.container_nav_topic}>Sobre</a>
      </nav>
      <div className={styles.container_inputContainer}>
        <input type="search" placeholder='Procurar' className={styles.container__search}/>
      </div>
    </header>
  )
} 