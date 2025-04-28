import { useState } from 'react'
import './App.css'
import VemaluVedaras from './assets/components/VemaluVedaras'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <VemaluVedaras />
    </>
  )
}

export default App
