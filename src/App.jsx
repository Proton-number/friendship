import { useState } from 'react'
import './App.css'
import Blessing from './Components/Blessing/Blessing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Blessing/>
    </>
  )
}

export default App
