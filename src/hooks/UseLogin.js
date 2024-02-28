import { auth } from "../firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState, useEffect } from "react"
import { useAuthContext } from "../hooks/useAuthContext"

export const useLogin = () => {
	const [error, setError] = useState(null)
	const [pending, setPending] = useState(false)
	const [isCancelled, setIsCancelled] = useState(false)

	const { dispatch } = useAuthContext()

	const login = async (email, password) => {
		if (!isCancelled) {
			setError(null)
			setPending(true)
		}

		try {
			const res = await signInWithEmailAndPassword(auth, email, password)

			dispatch({ type: "LOGIN", payload: res.user })
			if (!isCancelled) {
				setPending(false)
			}
		} catch (error) {
			console.log(error)
			if (!isCancelled) {
				setError(error.message)
				setPending(false)
			}
		}
	}

	useEffect(() => {
		return () => {
			setIsCancelled(true)
		}
	},[])

	return { error, pending, login }
}
