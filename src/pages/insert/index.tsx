import Head from "next/head";
import { FormEvent, useState } from "react";
import styles from './style.module.scss'

const Insert = () => {
  const [login, setLogin] = useState(false)
  const [passwordUser, setPassword] = useState('')
  // const [content, setContent] = useState('')
  const password = 'Boita'
  
  const handleSubmit = () => passwordUser === password && setLogin(true) 
  
  if(login == false){  
    return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <input type={'password'} value={passwordUser} onChange={(event: FormEvent<HTMLInputElement>) => setPassword(event.currentTarget.value)} />
      <button type={'submit'} onClick={handleSubmit}> Click </button>
    </> 
  )
  }
  else {

    return (
      <>
      <Head>
        <title>Novo artigo</title>
      </Head>
      <form className={styles.container}>
        <label>Title</label>
        <input type="text" />
        <label>Tags</label>
        <input type={"search"} />
        <label>author</label>
        <input type="text" />
        <label>thumbnail</label>
        <input type="file" />
        <label>content</label>
        <textarea />
        <button>Click</button>
      </form>
    </>
    )
  }
}

export default Insert;