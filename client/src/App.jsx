import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import NewHouseOwner from './pages/NewHouseOwner'


function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/new' element={<NewHouseOwner/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
