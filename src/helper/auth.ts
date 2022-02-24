import { IFirebaseError } from "../interfaces/IFirebaseError"

export const errorHandler = (err: IFirebaseError) => {
	if (err.code.includes("auth")) {
		switch (err.code) {
			case "auth/missing-email":
				throw new Error("Falta email")

			case "auth/invalid-email":
				throw new Error("Email ou senha inválidos")

			case "auth/email-already-in-use":
				throw new Error("Email já está em uso")

			case "auth/internal-error":
				throw new Error("Senha não informada")

			case "auth/weak-password":
				throw new Error("Senha fraca, ela deve ter no mínimo 6 caracteres")
				
			case "auth/user-not-found":
				throw new Error("Usuário não encontrado")

			case "auth/wrong-password":
				throw new Error("Senha incorreta")

			case "invalid-argument":
				throw new Error("Nome inválido")

			default:
				throw new Error(err.message)
		}
	}
}