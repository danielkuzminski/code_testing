import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

export const useAuthContext = () => {
	const context = useContext(AuthContext)

	if (!context) {
		throw new Error("outside of app context")
	}

	return context
}

// to use this hook import it in designated file and destructure all the values
