import type { NextPage } from 'next'
import '../service/initFirebase'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      {/* <Post/> */}
      <h1>clique <Link href={'/posts/carlos-first-article'}>Nesse</Link> link</h1>
    </>
  )
}

export default Home
