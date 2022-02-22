import { signIn } from "../../../service/authentication"

export default function SignIn(){ 

    const handleSignIn = async () => {
        const response = await signIn({email: "bar@gmail.com", password: "123456"})
        console.log(response);
    }

    return (
        <div>
            <h1>signIn</h1>
            <button onClick={handleSignIn}> signIn </button>
        </div>
    )
}

