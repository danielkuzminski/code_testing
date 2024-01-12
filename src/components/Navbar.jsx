//styles
import './Navbar.css'

import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navigation'>
        <p className="title">code battleground</p>
        <ul className='nav-items'>
            <li className='nav-item'><NavLink to='/games'>Games</NavLink></li>
            <li className='nav-item'><NavLink to='/add_game'>Add Games</NavLink></li>
            <li className='nav-item'><NavLink>to be added</NavLink></li>
            <li className='nav-item'><NavLink>to be added</NavLink></li>
            <li className='nav-item'><NavLink>sign in</NavLink></li>
        </ul>
    </nav>
  )
}
