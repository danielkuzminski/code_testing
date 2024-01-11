//styles
import './AddGame.css'

//react
import { useState } from 'react'

export default function AddGame() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [checkPs4, setCheckPs4] = useState(null)
    const [checkPs5, setCheckPs5] = useState(null)
    const [checkNs, setCheckNs] = useState(null)
    const [platforms, setPlatforms] = useState([])
    
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(title, platforms, description)
    }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Add game</h2>
        <label>
            <span>game title: </span>
            <input 
                type="text"
                onChange={(e) => {
                    setTitle(e.target.value)
                }} 
            />
        </label>
        <div>
            <span>choose platforms: </span>
            <div>
                <input type="checkbox" value="ps4" onChange={(e) => {
                    if(e.target.checked){
                        setCheckPs4(e.target.value)
                    } else {
                        setCheckPs4(null)
                    }
                }}/>
                <label>Playstation 4</label>
            </div>
            <div>
                <input type="checkbox" value="ps5" onChange={(e) => {
                    if(e.target.checked){
                        setCheckPs5(e.target.value)
                    } else {
                        setCheckPs5(null)
                    }
                }} />
                <label>Playstation 5</label>
            </div>
            <div>
                <input type="checkbox" value="NS" onChange={(e) => {
                    if(e.target.checked){
                        setCheckNs(e.target.value)
                    } else {
                        setCheckNs(null)
                    }
                }} />
                <label>Nintendo Switch</label>
            </div>
        </div>
        <label>
            <span>Add description:</span>
            <textarea onChange={(e) => {
                setDescription(e.target.value)
            }}></textarea>
        </label>
        <button type='submit'>Submit</button>
    </form>
  )
}


// add checkbox datas to platforms array