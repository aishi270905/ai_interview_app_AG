import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignUp from './authPages/SignUp'
import Login from './authPages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Routes>
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  </div>
  )
}

export default App
