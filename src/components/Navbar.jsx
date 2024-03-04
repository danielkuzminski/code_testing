//styles
import "./Navbar.css"

//hooks
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

//router
import { NavLink } from "react-router-dom"

//assets
import ps4 from "../assets/ps4.png"

export default function Navbar() {
	const { logout } = useLogout()

	const {user} = useAuthContext()

	return (
		<nav className="navigation">
			<p className="title">
				<img className="logo" src={ps4} />
				Szuflada geeka
			</p>
			<ul className='nav-items'>
				<li className="nav-item">
					<NavLink to="/">Główna</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/games">Gry</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to='/comics'>Komiksy</NavLink>
				</li>
				{/* <li className="nav-item">
					<NavLink to="/add_game">Dodaj</NavLink>
				</li> */}
				{user ? 
				<li className="nav-item" onClick={logout}>
					<NavLink>Wyloguj</NavLink>
				</li> : <li className="nav-item">
					<NavLink to="/login">Zaloguj</NavLink>
				</li>}
			</ul>
		</nav>
	)
}
