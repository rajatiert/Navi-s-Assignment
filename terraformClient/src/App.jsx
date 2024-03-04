import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { JobsArray } from './Constants/constants'
import './App.css'
import HomeContainer from './Components/HomeContainer'

function App() {
  

  return (
    <div className='flex  w-full'>
     
         <HomeContainer/>
    </div>
  )
}

export default App
