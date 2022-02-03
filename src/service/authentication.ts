import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './initFirebase'

interface ICredentials {
	email: string,
	password: string
}

const auth = getAuth(app);

export const signUp = async ({ email, password }: ICredentials) => {
	try {
		const { user } = await createUserWithEmailAndPassword(auth, email, password)

		return user
	}
	catch(error: any)  {
			const errorCode = error.code;
			const errorMessage = error.message;

			throw new Error(errorMessage)
	}
}

export const signIn = async ({ email, password }: ICredentials) => {
	try {
		const { user } = await signInWithEmailAndPassword(auth, email, password)

		return user
	}
	catch(error: any)  {
			const errorCode = error.code;
			const errorMessage = error.message;

			throw new Error(errorMessage)
	}
}