import styles from './style.module.scss'
import styleUtils from '../../styles/utils.module.scss'

interface IProps {
	children: string[],
  	className?: string,
  	fixed?: boolean
}

export const Tags = ({ children, className = '', fixed }: IProps) => {
  const isFixed = fixed ? styleUtils : '';
  const tags = children.map((data) => {
    return (
      <div key={data} className={`${styles.container} ${isFixed} ${className}`}>
        {data}
      </div>
    )
  })

  return (
    <div>
      {tags}
    </div>
  	)
}