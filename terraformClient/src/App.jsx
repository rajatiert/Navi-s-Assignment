import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeContainer from './Components/HomeContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex border-4 border-black'>
     
         <HomeContainer/>
    </div>
  )
}

export default App
