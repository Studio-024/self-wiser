import Image from 'next/image'
import styles from './style.module.scss'
import { data } from '../../pages/posts/models/data'
import { Tags } from '../tags'

interface IProps {
  data: data,
  className?: string,
}

const PostCardBlock = ({ data, className = ''}: IProps) => {
  return (
    <article className={`${styles.postCard} ${className}`}>
      <Image className={styles.postCard__thumb} src={data.thumbnail}/>
      <Tags type='Small' className={styles.postCard__tags}>{data.Tags}</Tags>
      <h1 className={styles.postCard__title}>{data.title}</h1>
      <span className={styles.postCard__author}>{data.author}</span>
      <span className={styles.postCard__createdAt}>{data.created_at}</span>
    </article>
  )
}

export default PostCardBlock;