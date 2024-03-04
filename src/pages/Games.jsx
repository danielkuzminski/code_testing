//styles
import "./Games.css"

//react
import { useState } from "react"

//hooks
import { useCollection } from "../hooks/useCollection"

//components
import AddGame from "../components/AddGame"

export default function Games() {
	const { data } = useCollection("games")

	const [show, setShow] = useState(false)

	return (
		<div>
			<button
				onClick={() => {
					setShow(!show)
				}}>
				{show ? <span>wróć</span> : <span>dodaj grę</span>}
			</button>
			{show && <AddGame />}
			{data &&
				data.map(game => (
					<div key={game.id}>
						<h2>{game.title}</h2>
						<p>{game.description}</p>
						<div>
							{game.platforms.map(one => (
								<p>{one}</p>
							))}
						</div>
					</div>
				))}
		</div>
	)
}
