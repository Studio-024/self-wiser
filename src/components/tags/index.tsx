import styles from './style.module.scss'

interface IProps {
	children: string[],
}

export const Tags = ({ children }: IProps) => {
  	const tags = children.map((data) => {
    return (
    	<div key={data} className={`${styles.tag}`}>
        <span className={styles.tag__name}>{data}</span>
      </div>
    )
  })

  return (
    <div className={styles.container}>
      {tags}
    </div>
  )
}