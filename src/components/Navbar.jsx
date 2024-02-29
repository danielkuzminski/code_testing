//styles
import './Navbar.css'

//hooks
import {useLogout} from '../hooks/useLogout'

import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const {logout} = useLogout()

  return (
    <nav className='navigation'>
        <p className="title">code battleground</p>
        <ul className='nav-items'>
            <li className='nav-item'><NavLink to='/'>Home</NavLink></li>
            <li className='nav-item'><NavLink to='/games'>Games</NavLink></li>
            <li className='nav-item'><NavLink to='/add_game'>Add Games</NavLink></li>
            <li className='nav-item'><NavLink>to be added</NavLink></li>
            <li className='nav-item'><NavLink to='/login'>Login</NavLink></li>
            <li className='nav-item' onClick={logout}><NavLink>logout</NavLink></li>
        </ul>
    </nav>
  )
}
