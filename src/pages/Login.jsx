//styles
import './Login.css'
//router
import { Link } from 'react-router-dom'
//react
import { useState } from 'react'
//hooks
import { useLogin } from '../hooks/UseLogin'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {error, pending, login} = useLogin()

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    login(email, password)

    resetForm()
  }

  return (
    <form className='signup' onSubmit={handleSubmit}>
        <h1 className='signup__title'>Login</h1>
        {error && <span>{error}</span>}
        <label>
          <span>email</span>
          <input 
            type="email"
            required
            placeholder='email...'
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
            placeholder='password...'
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            value={password}
            />
        </label>
        <button className='btn-submit' type="submit">Submit</button>
        <p className='signup__advice'>Not a member yet?</p>
        <Link to='/signup' className='btn-signup'>Signup</Link>
    </form>
  )
}
