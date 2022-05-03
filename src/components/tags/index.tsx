import styleDf from './style.module.scss'
import styleSm from './styleSm.module.scss'

interface IProps {
	children: string[],
  className?: string,
  type?: 'Normal' | 'Small'
}

export const Tags = ({ children, className = '', type = 'Normal' }: IProps) => {
  const styles = type === 'Small' ? styleSm : styleDf;
  
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