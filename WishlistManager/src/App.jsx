import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WishlistManager from './components/WishlistManager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WishlistManager />
    </>
  )
}

export default App
