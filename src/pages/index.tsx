import type { NextPage } from 'next'
import { Post } from './posts'
import '../service/initFirebase'

const Home: NextPage = () => {
  return (
    <>
      <Post/>
    </>
  )
}

export default Home
