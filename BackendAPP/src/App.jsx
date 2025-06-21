import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [card, setCard] = useState([])

  const fetchData = async () =>{
    const a = await fetch("https://jsonplaceholder.typicode.com/posts");

    let data = await a.json();
    setCard(data);

  }

  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <>
      <div className='container'>
      {card.map((card) =>{
          return <div key={card.id} className='card'>
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>By: {card.userId}</span>
          </div>
        })}
      </div>
    </>
  )
}

export default App
