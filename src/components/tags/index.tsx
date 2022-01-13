import styles from './style.module.scss'
import styleUtils from '../../styles/utils.module.scss'

interface props {
	children: string,
  	className?: string,
  	fixed?: boolean
}

export const Tags = ({ children, className = '', fixed }: props) => {
  const isFixed = fixed ? styleUtils : '';

  return (
	<div className={`${styles.container} ${isFixed} ${className}`}>
		<div>
			{children}
		</div>
	</div>
  )
}