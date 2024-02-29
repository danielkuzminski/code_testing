//style
import "./Signup.css"
//react
import { useState } from "react"
//hooks
import { useSignup } from "../hooks/useSignup"
//router
import { useNavigate } from "react-router-dom"

export default function Signup() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [displayName, setDisplayName] = useState("")

	const navigate = useNavigate()

	const { error, pending, signup } = useSignup()

	const resetForm = () => {
		setEmail("")
		setPassword("")
		setDisplayName("")
	}

	const handleSubmit = e => {
		e.preventDefault()

		signup(email, password, displayName)

		resetForm()
	}

	return (
		<form className="signup" onSubmit={handleSubmit}>
			<h1 className="signup__title">Signup</h1>
			{error && <p>{error}</p>}
			<label>
				<span>email</span>
				<input
					type="email"
					required
					placeholder="your email..."
					onChange={e => {
						setEmail(e.target.value)
					}}
					value={email}
				/>
			</label>
			<label>
				<span>password</span>
				<input
					type="password"
					required
					placeholder="your password..."
					onChange={e => {
						setPassword(e.target.value)
					}}
					value={password}
				/>
			</label>
			<label>
				<span>user name</span>
				<input
					type="text"
					required
					placeholder="set your user name..."
					onChange={e => {
						setDisplayName(e.target.value)
					}}
					value={displayName}
				/>
			</label>
			{!pending && <button className="btn-submit">Submit</button>}
			{pending && <button className="btn-submit">Sending</button>}
			<button onClick={() => {navigate('/login')}} className="btn-submit back">Back to login</button>
		</form>
	)
}
