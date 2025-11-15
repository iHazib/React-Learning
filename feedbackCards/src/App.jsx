import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Feed from './components/Feed'
import FeedbackManager from './components/FeedbackManager'


function App() {

  return (
    <div>
      <h1>All Feedbacks:</h1>
      <FeedbackManager />
    </div>
  )
}

export default App
