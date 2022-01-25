import Head from "next/head"
import Image from "next/image"
import styles from './style.module.scss'
import { Header } from "../../components/header"
// import { Tags } from "../../components/tags"
import { dataExemple } from "./models/data"


const Post = () => {
  return(
    <>
      <Head>
        <title>{dataExemple.title}</title>
        <meta name="description" content={dataExemple.resume}/>
      </Head>

      <div className={styles.container}>
        <Header className={styles.container_header}/>
        <main className={styles.container_main}>
          <section className={styles.container_main_section}>
            <h1 className={styles.container_main_section_title}>{dataExemple.title}</h1>
            <p className={styles.container_main_section_resume}>{dataExemple.resume}</p>
            <div className={styles.container_main_section_thumb}>
              <Image src={dataExemple.thumbnail} alt="test"/>
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
export default Post