import {remark} from 'remark'
import html from 'remark-html'
import Head from "next/head"
import Image from "next/image"
import styles from './style.module.scss'
import { Header } from "../../components/header"
import { data } from "./models/data"
import { GetStaticPaths, GetStaticProps } from "next"
import { getDocsBySlugName, getWritterById } from "../../service/initFirebase"


export interface IArticle {
  title: string,
  description: string,
  content: string,
  author: any,
  date: string,
  Tags: string[],
  thumbnail: StaticImageData,
  created_at: string | any
}

export interface IWritter {
  name: string,
  profile_picture: string,
  article_list: string[]
}

interface IPostProps {
  parseArticle: IArticle
}

export default function Post({ parseArticle }: IPostProps) {
  return(
    <>
      <Head>
        <title>{parseArticle.title}</title>
        <meta name="description" content={parseArticle.description}/>
      </Head>

      <div className={styles.container}>
        <Header className={styles.header}/>
        <main className={styles.post}>
          <section className={styles.post__metadata}>
            <h1>{parseArticle.title}</h1>
            <p className={styles.post__resume}>{parseArticle.description}</p>
            <div className={styles.post__thumbnail}>
              <Image src={data.thumbnail}/>
            </div>
          </section>
          <article 
            className={styles.post__content} 
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

function timeStampToDate(seconds: number) {
  const result = new Date(seconds*1000).toLocaleDateString()
  return result
}

export const getStaticPaths: GetStaticPaths  = async () => {
  return {
    paths: [], 
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async( ctx: any ) => {  
  const { slug } = ctx.params

  const fetchArticle: IArticle  = await getDocsBySlugName(slug) 
  const content = await markdownToHtml(fetchArticle.content)
  const created_at = timeStampToDate(fetchArticle.created_at.seconds)
  
  const fetchWritter: IWritter = await getWritterById(fetchArticle.author.id) 

  const parseArticle: IArticle = {
    ...fetchArticle,
    content,
    created_at,
    author: fetchWritter.name,
  }

  return {
    props: {
      parseArticle,
    }  
  }
}  