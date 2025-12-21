import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignUp from './authPages/SignUp'
import Login from './authPages/Login'
import Assignments from './allPages/Assignments/Assignments'
import Dashboard from './allPages/DashBoard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Routes>
      <Route path="/choose-skills" element={<Dashboard />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/assignments" element={<Assignments />} />
    </Routes>
  </div>
  )
}

export default App
