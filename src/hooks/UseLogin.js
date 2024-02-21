import { auth } from "../firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"

export const useLogin = () => {
	const [error, setError] = useState(null)
	const [pending, setPending] = useState(false)

	const { dispatch } = useAuthContext()

	const login = async (email, password) => {
		setError(null)
		setPending(true)

		try {
			const res = await signInWithEmailAndPassword(auth, email, password)

			dispatch({ type: "LOGIN", payload: res.user })
			setPending(false)
		} catch (error) {
			console.log(error)
			setError(error.message)
			setPending(false)
		}
	}
	return { error, pending, login }
}
