import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="collapse bg-base-100 border-base-300 border">
  <input type="checkbox" />
  <div className="collapse-title font-semibold">How do I create an account?</div>
  <div className="collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
    </>
  )
}

export default App
