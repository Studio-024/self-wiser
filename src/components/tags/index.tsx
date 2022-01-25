import styles from './style.module.scss'

interface IProps {
	children: string[],
  className?: string
}

export const Tags = ({ children, className = '' }: IProps) => {
  	const tags = children.map((data) => {
    return (
    	<div key={data} className={`${styles.tag}`}>
        <span className={styles.tag__name}>{data}</span>
      </div>
    )
  })

  return (
    <div className={`${styles.container} ${className}`}>
      {tags}
    </div>
  )
}