import Head from "next/head"
import Image from "next/image"
import styles from './style.module.scss'
import { Header } from "../../components/header"
import { data } from "./models/data"
import { PostProfile } from "../../components/postProfile"

export const Post = () => {
  return(
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

      <div className={styles.container}>
        <Header className={styles.container_header}/>
        <main className={styles.container_main}>
          <article className={styles.container_main_article}>
            <h1>{data.title}</h1>
            <p className={styles.container_main_article_resume} >{data.resume}</p>
            <PostProfile author={{name: 'Alexandre', photo: data.thumbnail}} post_created={'1/11/2222'}></PostProfile>
            <div className={styles.container_main_article_thumb}>
              <Image src={data.thumbnail} quality={90} placeholder='blur'/>
            </div>
            <h2>{data.content.paragraph_1.title}</h2>
            {data.content.paragraph_1.text.map((element, i)=>{return (<p key={i}>{element}</p>)})}
            <h2>{data.content.paragraph_2.title}</h2>
            {data.content.paragraph_2.text.map((element, i)=>{return (<p key={i}>{element}</p>)})}
            <h3>{data.content.paragraph_2.subtitle.title}</h3>
            <p>{data.content.paragraph_2.subtitle.text}<b>it text bolder</b></p>
          </article>
        </main>
      </div>
    </>
  )
} 