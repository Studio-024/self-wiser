import Head from "next/head"
import Image from "next/image"
import styles from './style.module.scss'
import { Header } from "../../components/header"
import { Tags } from "../../components/tags"
import { data } from "./models/data"

export const Post = () => {
  return(
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.resume}/>
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
          <article 
            className={styles.container_main_section} 
            dangerouslySetInnerHTML={{"__html": "<h1>this is a title World</h1> <h2>this is a title World</h2> <h3>this is a title World</h3> <p> oi </p> <b>mundo</b>"}}
          />
        </main>
      </div>
    </>
  )
} 