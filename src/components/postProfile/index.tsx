import Image from "next/image"
import styles from "./style.module.scss"
import { data } from '../../pages/posts/models/data'

interface IProps { 
  data: data,
  className?: string
}


export const PostProfile = ( { data, className = '' }: IProps ) => {
  return (
    <div className={`${styles.profile} ${className}`}>
      <div className={styles.profile__photoContainer}>
        <Image 
          className={styles.profile__photo} 
          src={data.photo} 
          width="100" 
          height="100" 
          objectFit="cover" 
          placeholder="blur" 
          quality={70}
          alt={`foto de perfil do ${data.author}`}
        />
      </div>
      <div className={styles.profile__dataContainer}>
        <span className={styles.profile__name}> {data.author} </span>
        <span className={styles.profile__created_at}> {data.created_at} </span>
      </div>
    </div>
  )
}