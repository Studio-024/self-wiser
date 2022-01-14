import Head from "next/head"
import Image from "next/image"
import styles from './style.module.scss'
import { Header } from "../../components/header"
import { data } from "./models/data"
import { Article } from "../../components/article"

export const Post = () => {
  return(
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

      <div className={styles.container}>
        <Header className={styles.container_header}/>
        <main className={styles.container_main}>
          <section className={styles.container_main_section}>
            <h1 className={styles.container_main_section_title}>{data.title}</h1>
            <p className={styles.container_main_section_resume}>{data.resume}</p>
            <div className={styles.container_main_section_thumb}>
              <Image src={data.thumbnail} alt="test"/>
            </div>
          </section>
          <Article className={styles.container_main_section} content="<h2>this is a title World</h2> <p> oi <b>mundo</b></p>"/>
        </main>
      </div>
    </>
  )
} 