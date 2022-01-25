import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/header'
import PostCard from '../components/post-card'
import { dataExemple } from './posts/models/data'
import styles from './style.module.scss'
// import '../service/initFirebase'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Self Wiser</title>
        <meta name="description" content="Venha aprender a aprender de forma rapida e eficiênte"/>
      </Head>
      <Header sticky/>
      <main>
        <PostCard className={styles.postCard} data={dataExemple}/>
      </main>
    </>
  )
}

export default Home
