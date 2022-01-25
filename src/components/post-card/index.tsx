import Image from 'next/image';
import { PostProfile } from '../postProfile';
import styles from './style.module.scss'
import { data } from '../../pages/posts/models/data'
import { Tags } from '../tags'

interface IProps {
  data: data,
  className?: string
}

const PostCard = ({ data, className = '' }: IProps) => {
  return (
    <section className={`${styles.postCard} ${className}`}>
      <div className={styles.postCard__metadata}>
        <Image className={styles.postCard__thumb} src={data.thumbnail} placeholder='blur'/>
        <PostProfile className={styles.postCard__postProfile} data={data}/>
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
    </section>
  )
}

export default PostCard;