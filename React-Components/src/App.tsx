

import './App.scss'
import Joke from './components/Joke'
import jokeData from './data/data.json'
import { JokeData } from './Types/Alltypes';

function App() {
  
  return (
    < div className='parent'>
      {
        jokeData && jokeData.map((joke:JokeData) => {
          return (
            <Joke key={joke.id} id={joke.id} joke={joke.joke} rating={joke.rating} />
          )
        })
      }
    </div>
  )
}

export default App
