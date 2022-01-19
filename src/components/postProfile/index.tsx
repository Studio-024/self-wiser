import Image from "next/image"
import styles from "./style.module.scss"

interface IProps { 
  data: {
    name: string,
    photo: StaticImageData,
    created_at: string
  },
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
          quality={90}
          alt={`foto de perfil do ${data.name}`}
        />
      </div>
      <div className={styles.profile__dataContainer}>
        <span className={styles.profile__name}> {data.name} </span>
        <span className={styles.profile__created_at}> {data.created_at} </span>
      </div>
    </div>
  )
}