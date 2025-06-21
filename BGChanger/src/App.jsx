import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("White");

  return (
    <>
      <div className='w-full h-screen duration-200 flex justify-center'
       style={{backgroundColor: color}}>
        <div className='box-border h-1/15 w-8/11 fixed flex flex-wrap align-center justify-center outline-none bottom-15 center rounded-full py-2 gap-6 '
        style = {{backgroundColor : "#000"}}>
          <button className='px-4 rounded-full text-white'
           onClick={()=>setColor("red")} style={{backgroundColor : "red"}}> Red 
          </button>
          <button className='px-4 rounded-full text-white'
           onClick={()=>setColor("blue")} style={{backgroundColor : "blue"}}> blue
          </button>
          <button className='px-4 rounded-full text-white'
           onClick={()=>setColor("green")} style={{backgroundColor : "green"}}> green 
          </button>
          <button className='px-4 rounded-full text-black'
           onClick={()=>setColor("Yellow")} style={{backgroundColor : "Yellow"}}> yellow 
          </button>
          <button className='px-4 rounded-full text-black'
           onClick={()=>setColor("orange")} style={{backgroundColor : "orange"}}> orange 
          </button><button className='px-4 rounded-full text-white'
           onClick={() => setColor("olive")} style={{backgroundColor : "olive"}}> olive 
          </button>
          <button className='px-4 rounded-full text-black'
           onClick={() => setColor("pink")} style={{backgroundColor : "pink"}}> pink 
          </button>
        </div>
      </div>
    </>
  )
}

export default App
