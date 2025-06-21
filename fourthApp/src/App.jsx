import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const color = useRef(null);
  useEffect(() => {
    console.log('Button ref:', color.current);
    if (color.current) {
      color.current.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    }
  }, [count])
  
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref = {color} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
