import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const [error, setError] = useState(null)
    const [isCancelled, setIsCancelled] = useState(false)

    const {dispatch} = useAuthContext()

    const logout = async () => {
        if(!setIsCancelled){
            setError(null)
        }
        try {
            await signOut(auth)
            dispatch({type: 'LOGOUT'})
        } catch (error) {
            if(!isCancelled){
                setError(error.message)
            }
        }
    }
    useEffect(() => {
        return () => {
            setIsCancelled(true)
        }
    },[])

    return {error, logout}
}