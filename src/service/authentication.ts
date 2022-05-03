import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { app, db } from './initFirebase'

import { ICredentials } from '../interfaces/ICredentials';
import { IFirebaseError } from '../interfaces/IFirebaseError';
import { errorHandler } from '../helper/auth';

const auth = getAuth(app);

export const signUp = async ({ email, password, name }: ICredentials) => {
	try {
		const { user } = await createUserWithEmailAndPassword(auth, email, password)
		
		await setDoc(doc(db, "writter", user.uid), {
			name: name,
			email: user.email
			
			
		});
		return user
	}
	catch(error: any)  {
		const errorObj: IFirebaseError = error

		return errorHandler(errorObj)
	}
}

export const signIn = async ({ email, password }: ICredentials) => {
	try {
		const { user } = await signInWithEmailAndPassword(auth, email, password)
		return user
	}
	catch(error: any)  {
		const errorObj: IFirebaseError = error
		
		return errorHandler(errorObj)
	}
}