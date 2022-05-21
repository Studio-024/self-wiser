import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/header'
import PostCardLine from '../components/postCardLine'
import PostCardBlock from '../components/postCardBlock'
import { dataExample } from './posts/models/data'
import styles from './style.module.scss'
import { useSizes } from '../hooks/useSizes'
// import '../service/initFirebase'
import Link from 'next/link'
import { AutocompleteField } from '../components/autoComplete';

const Home: NextPage = () => {
  const { width } = useSizes()
  
  return (
    <>
      <Head>
        <title>Self Wiser</title>
        <meta name="description" content="Venha aprender a aprender de forma rapida e eficiênte"/>
      </Head>
      <Header sticky/>
      <main>
        <form className={styles.filter}>
          <AutocompleteField label='Tag' options={dataExample.Tags} size="small" className={styles.box} sx={{width: '9rem'}}/>
        </form>
        { width/16 < 40 ?
          <>
            <PostCardBlock className={styles.postCard} data={dataExample}/>
            <PostCardBlock className={styles.postCard} data={dataExample}/>
          </>
          :
          <>
            <PostCardLine className={styles.postCard} data={dataExample}/>
            <PostCardLine className={styles.postCard} data={dataExample}/>
          </>
        }
      </main>
      <h1>clique <Link href={'/posts/carlos-first-article'}>Nesse</Link> link</h1>
    </>
  )
}

export default Home