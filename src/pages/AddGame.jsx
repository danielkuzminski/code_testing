//styles
import './AddGame.css'

//react
import { useState, useEffect } from 'react'

//firebase
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { getDownloadURL, ref } from 'firebase/storage'
import { uploadBytesResumable } from 'firebase/storage'

//config
import { db, storage } from '../firebase/config'

//router
import { useNavigate } from 'react-router-dom'


export default function AddGame() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [platforms, setPlatforms] = useState([])
    const [file, setFile] = useState(null)
    const [progress, setProgress] = useState(0)
    const [fileURL, setFileURL] = useState('')

    const navigate = useNavigate()

    const uploadFile = (data) => {
        if(!data) return

        const storageRef = ref(storage, `/images/`)

        const uploadTask = uploadBytesResumable(storageRef, data)

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) *100
                    )
                    setProgress(prog)},
                    (err) => {console.log(err.message)},
                    () => {getDownloadURL(uploadTask.snapshot.ref).then((url => {
                        setFileURL(url)
                        console.log(url)
                    }))
                }
        )
    } 

    
    const handleSubmit = async (e) => {
        e.preventDefault()

        let ref = collection(db, 'games')
        // console.log(title, platforms, description)

        const createdAt = serverTimestamp()

        uploadFile(file)
        await addDoc(ref, {title, description, platforms, createdAt, fileURL})

        navigate('/games')
        // resetForm()
    }

    const addPlatforms = (platform) => {
        setPlatforms((prev) => {
            if(prev.includes(platform) || platform === null) {
                return prev
            } else {
                return [...prev, platform]

            }     
        })
    }

    const resetForm = () => {
        setTitle('')
        setDescription('')
        setPlatforms([])
        
    }

  return (
    <form className='add__form' onSubmit={handleSubmit}>
        <h2 className='form__title'>Add game</h2>
        <label>
            <span>game title: </span>
            <input 
                type="text"
                required
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
                value={title}
            />
        </label>
        <div>
            <span>choose platforms: </span>
            <div>
                <input type="checkbox" onChange={(e) => {
                    if(e.target.checked){
                        addPlatforms('ps4')
                    } else {
                        addPlatforms(null)
                    }
                }}
                />
                <label>Playstation 4</label>
            </div>
            <div>
                <input type="checkbox" onChange={(e) => {
                    if(e.target.checked){
                        addPlatforms('ps5')
                    } else {
                        addPlatforms(null)
                    }
                }} />
                <label>Playstation 5</label>
            </div>
            <div>
                <input type="checkbox" onChange={(e) => {
                    if(e.target.checked){
                        addPlatforms('ns')
                    } else {
                        addPlatforms(null)
                    }
                }} />
                <label>Nintendo Switch</label>
            </div>
        </div>
        <label>
            <span>Add description:</span>
            <textarea 
                onChange={(e) => {
                setDescription(e.target.value)
                }}
                value={description}
                ></textarea>
        </label>
        <label>
            <span>add picture: </span>
            <input type="file" onChange={(e) => {
                setFile(e.target[0].files[0])
            }}/>
        </label>
        <button type='submit'>Submit</button>
    </form>
  )
}


// make checkbox unchecked