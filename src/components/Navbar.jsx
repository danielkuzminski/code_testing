//styles
import "./Navbar.css"

//hooks
import { useLogout } from "../hooks/useLogout"

//router
import { NavLink } from "react-router-dom"

//assets
import ps4 from "../assets/ps4.png"

export default function Navbar() {
	const { logout } = useLogout()


	return (
		<nav className="navigation">
			<p className="title">
				<img className="logo" src={ps4} />
				Szuflada geeka
			</p>
			<ul className='nav-items'>
				<li className="nav-item">
					<NavLink to="/">Home</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/games">Gry</NavLink>
				</li>
				<li className="nav-item">
					<NavLink>Komiksy</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/add_game">Dodaj</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/login">Login</NavLink>
				</li>
				<li className="nav-item" onClick={logout}>
					<NavLink>logout</NavLink>
				</li>
			</ul>
		</nav>
	)
}
