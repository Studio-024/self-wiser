import { FormEvent, useState } from 'react'

import styles from './style.module.scss'
import { Header } from '../../../components/header'
import { signIn } from '../../../service/authentication'
import { ICredentials } from '../../../interfaces/ICredentials'

export default function SignIn() {
	const [credentials, setCredentials] = useState<ICredentials>({email: '', password: ''})
	
	const login = async (event: FormEvent): Promise<void> => {
		event.preventDefault()
		
		const signInCallback = await signIn(credentials)
		
		console.log(signInCallback)
	}
	
	return (
		<div>
			<Header />
			<main>
			
				<form className={styles.signIn}>					
					<fieldset>
						<label htmlFor="email">Email: </label>
						<input type="email" id="email" onChange={(e: any)=> {setCredentials(credentials => ({
							...credentials,
							email: e.target.value
						}))}} />
						
						<label htmlFor="password">Senha: </label>
						<input type="password" id="password" onChange={(e: any)=> {setCredentials(credentials => ({
							...credentials,
							password: e.target.value
						}))}}/>
					</fieldset>
					<button onClick={login}>registrar</button>
				</form>

			</main>
		</div>
	)
}

