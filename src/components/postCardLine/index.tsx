import Image from 'next/image'
import { PostProfile } from '../postProfile'
import styles from './style.module.scss'
import { data } from '../../pages/posts/models/data'
import { Tags } from '../tags'

interface IProps {
  data: data,
  className?: string,
}

const PostCardLine = ({ data, className = ''}: IProps) => {
  return (
    <article className={`${styles.postCard} ${className}`}>
      <div className={styles.postCard__metadata}>
        <div className={styles.postCard__containerImage}>
          <Image className={styles.postCard__thumb} src={data.thumbnail} placeholder='blur'/>
        </div>
        <PostProfile type='Small' className={styles.postCard__postProfile} data={data}/>
      </div>    
      <div className={styles.postCard__article}>
        <div className={styles.container}>
          <h2 className={styles.container__title}>{data.title}</h2>
          <p className={styles.container__resume}>{data.resume}</p>
        </div>
        <div className={styles.container}>
          <Tags type='Small' className={styles.tags}>{data.Tags}</Tags>
        </div>
      </div>
    </article>
  )
}

export default PostCardLine;