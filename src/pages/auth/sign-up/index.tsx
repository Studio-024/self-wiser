import styles from './style.module.scss'
import { Header } from '../../../components/header'
import { signUp } from '../../../service/authentication'
import { FormEvent, useState } from 'react'

interface ICredentials {
	email: string,
	password: string
}

export default function SignUp() {
	const [credentials, setCredentials] = useState<ICredentials>({email: "bar@gmail.com", password: "123456"})

	const login = async (event: FormEvent): Promise<void> => {
		event.preventDefault()
		const foo = await signUp(credentials)
		console.log(foo)
	}

	return (
		<>
		<div className={styles.container}>
			<Header className={styles.container_header}/>
			<main className={styles.container_main}>

				<form className={styles.container_main_section}>
					<input type="email" />
					<input type="password" />
					<button onClick={login}>cLIcA</button>
				</form>
			</main>
		</div>
		</>
	)
}
