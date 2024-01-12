//styles
import './Games.css'

//hooks
import { useCollection } from '../hooks/useCollection'


export default function Games() {

    const {data} = useCollection('games')

  return (
    <div>
        {data && data.map((game) => (
            <div key={game.id}>
                <h2>{game.title}</h2>
                <p>{game.description}</p>
                <div>{game.platforms.map(one => (
                  <p>{one}</p>
                ))}</div>
            </div>
        ))}
    </div>
  )
}
