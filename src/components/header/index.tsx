import styles from './style.module.scss'
import styleUtils from '../../styles/utils.module.scss'

interface IProps {
  className?: string,
  fixed?: boolean
}

export const Header = ({ className = '', fixed }: IProps) => {
  const isFixed = fixed ? styleUtils : '';

  return (
    <header className={`${styles.header} ${isFixed} ${className}`}>
      <div className={styles.header__logo}>
        <img alt='Self Wiser'/>
      </div>
      <nav className={styles.header__nav}>
        <a className={styles.header__topic}>Artigos</a>
        <a className={styles.header__topic}>Sobre</a>
      </nav>
      <div>
        <input type="search" placeholder='Procurar' className={styles.header__search}/>
      </div>
    </header>
  )
} 