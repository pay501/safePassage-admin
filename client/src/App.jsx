import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import NewHouseOwner from './pages/NewHouseOwner'
import Management from './pages/Management'
import Edit from './pages/Edit'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/new' element={<NewHouseOwner/>}/>
          <Route path='/management' element={<Management/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
