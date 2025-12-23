import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignUp from './authPages/SignUp'
import Login from './authPages/Login'
import Dashboard from './allPages/DashBoard/Dashboard'
import AssignmentsPlanner from './allPages/Assignments/AssignmentsPlanner'
import MockTest from './allPages/MockTests/MockTest'
import WelcomePage from './allPages/WelcomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Routes>
      <Route path="/" element={<WelcomePage/>}/>
      <Route path="/choose-skills" element={<Dashboard />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/assignmentsplanner" element={<AssignmentsPlanner />} />
      <Route path="/mocktest" element={<MockTest />} />
    </Routes>
  </div>
  )
}

export default App
