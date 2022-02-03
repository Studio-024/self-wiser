import styles from './style.module.scss'
import { Header } from '../../components/header'
import { signUp } from '../../service/authentication'

export default function SignUp() {
	const credentials = {
		email: 'foo@gmail.com',
		password: 'bar'
	}

	const login = async (): Promise<void> => {
		const foo = await signUp(credentials)
		console.log(foo)
	}

	return (
		<>
		<div className={styles.container}>
			<Header className={styles.container_header}/>
			<main className={styles.container_main}>

				<section className={styles.container_main_section}>
					<button onClick={login} />
				</section>
			</main>
		</div>
		</>
	)
}
