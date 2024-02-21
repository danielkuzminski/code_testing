import { useState } from "react"
import { auth } from "../firebase/config"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)

    const {dispatch} = useAuthContext()

    const signup = async (email, password, displayName) => {
        setError(null)
        setPending(true)

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            setPending(false)

            await updateProfile(res.user, {'displayName': displayName})

            dispatch({type: 'LOGIN', payload: res.user})
        } catch (error) {
            console.log(error);
            setError(error.message)
            setPending(false)
        }

    }
    
    return {error, pending, signup}
}