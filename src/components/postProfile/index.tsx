import Image from "next/image"
import styles from "./style.module.scss"

interface IProps { 
  author: {
    name: string,
    photo: StaticImageData,
  }
  post_created: string
}


export const PostProfile = ( { author, post_created }:IProps ) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__photoContainer}>
        <Image className={styles.profile__photo} src={author.photo} width="100" height="100" objectFit="cover" quality={90} />
      </div>
      <div className={styles.profile__dataContainer}>
        <span className={styles.profile__name}> {author.name} </span>
        <span className={styles.profile__post_created}> {post_created} </span>
      </div>
    </div>
  )
}