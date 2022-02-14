import type { NextPage } from 'next'
import '../service/initFirebase'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <h1>clique <Link href={'/posts/carlos-first-article'}>Nesse</Link> link</h1>
      <h1>se <Link href={'/auth/sign-up'}>registra aí</Link> tchuco</h1>
      <h1><Link href={'/auth/sign-in'}>loga aí</Link> tchuco</h1>
    </>
  )
}

export default Home
