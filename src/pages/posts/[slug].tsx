import {remark} from 'remark'
import html from 'remark-html'
import Head from "next/head"
import Image from "next/image"
import styles from './style.module.scss'
import { Header } from "../../components/header"
import { data } from "./models/data"
import { GetStaticPaths, GetStaticProps } from "next"
import { getDocsBySlugName } from "../../service/initFirebase"


interface IArticle {
  title: string,
  description: string,
  content: string,
  author: string,
  date: string,
  Tags: string[],
  thumbnail: StaticImageData,
}

interface IPostProps {
  parseArticle: IArticle
}

export default function Post({parseArticle}: IPostProps) {
  return(
    <>
      <Head>
        <title>{parseArticle.title}</title>
        <meta name="description" content={parseArticle.description}/>
      </Head>

      <div className={styles.container}>
        <Header className={styles.container_header}/>
        <main className={styles.container_main}>

          <section className={styles.container_main_section}>
            <h1 className={styles.container_main_section_title}>{parseArticle.title}</h1>
            <p className={styles.container_main_section_resume}>{parseArticle.description}</p>
            <div className={styles.container_main_section_thumb}>
              <Image src={data.thumbnail} alt="test"/>
            </div>
          </section>
          <article 
            className={styles.container_main_section} 
            dangerouslySetInnerHTML={{"__html": parseArticle.content}}
          />
        </main>
      </div>
    </>
  )
} 


export  async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export const getStaticPaths: GetStaticPaths  = async () => {
  return {
    paths: [], 
    fallback: 'blocking'

  }
}

export const getStaticProps: GetStaticProps = async( ctx: any ) => {  
  const { slug } = ctx.params

  const fetchArticle: any = await getDocsBySlugName(slug) 
  const content = await markdownToHtml(fetchArticle.content)

  const parseArticle = {
    ...fetchArticle,
    content,
    created_at: 'string',
    author: 'hard coded author',
  }

  return {
    props: {
      parseArticle,
    }  
  }
}  