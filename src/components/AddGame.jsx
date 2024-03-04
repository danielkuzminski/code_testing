//styles
import "./AddGame.css"

//react
import { useState, useEffect } from "react"

//firebase
import { db, storage } from "../firebase/config"

export default function () {
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [file, setFile] = useState([])
	console.log(file)

	return (
		<form className="game-form">
			<h2>Dodaj grę</h2>
			<label>
				<span>Tytuł:</span>
				<input
					type="text"
					required
					onChange={e => {
						setTitle(e.target.value)
					}}
					value={title}
				/>
			</label>
			<label>
				<span>Opis:</span>
				<textarea
					required
					onChange={e => {
						setDescription(e.target.value)
					}}
					value={description}></textarea>
			</label>
			<label>
				<span>Dodaj okładkę</span>
				<input
					type="file"
					required
					onChange={e => {
						console.log(e)
					}}
				/>
			</label>
			<button type="submit">Dodaj</button>
		</form>
	)
}
