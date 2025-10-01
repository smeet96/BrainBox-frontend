
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dasboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/dashboard' element={<Dasboard/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/signin' element={<Signin/>}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
