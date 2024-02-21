import { Link } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>
          <span>email</span>
          <input 
            type="email"
            required
            onChange={(e) => {
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
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            value={password}
            />
        </label>
        <p>Not a member yet?</p>
        <Link to='/signup'>Signup</Link>
        <button type="submit">Submit</button>
    </form>
  )
}
