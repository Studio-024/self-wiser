import { FormEvent, useState } from 'react'

import styles from './style.module.scss'
import { Header } from '../../../components/header'
import { signUp } from '../../../service/authentication'
import { ICredentials } from '../../../interfaces/ICredentials'


export default function SignUp() {
	const [credentials, setCredentials] = useState<ICredentials>({email: '', password: ''})
	
	const login = async (event: FormEvent): Promise<void> => {
		event.preventDefault()
		
		const foo = await signUp(credentials)
		
		console.log(foo)
	}
	
	return (
		<div>
			<Header />
			<main>
			
				<form className={styles.signup}>
					<fieldset>
						<label htmlFor="name">nome de usuário: </label>
						<input type="text" id="name" onChange={(e: any)=> {setCredentials(credentials => ({
							...credentials,
							email: e.target.value
						}))}} />
						
						<label htmlFor="picture">foto de perfil: </label>
						<input type="file" id="picture" accept="image/png, image/jpeg"/>
					</fieldset>
					
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