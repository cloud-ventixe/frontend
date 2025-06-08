import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './assets/Pages/Dashboard'
import { Bookings } from './assets/Pages/Bookings'
import { Events } from './assets/Pages/Events'
import { Login } from './assets/Pages/Login'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/bookings' element={<Bookings />} />
      <Route path='/events' element={<Events />} />
    </Routes>
  )
}

export default App
