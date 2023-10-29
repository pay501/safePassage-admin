import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import NewHouseOwner from './pages/NewHouseOwner'
import Edit from './pages/Edit'
import Visitor from './pages/Visitor'
import House_Owner from './pages/House_Owner'
import Search_bar from './components/Search_bar'
import Security from './pages/Security'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/new' element={<NewHouseOwner/>}/>
          <Route path='/security' element={<Security/>}/>
          <Route path='/edit/:slug' element={<Edit/>}/>
          <Route path='/visitor' element={<Visitor/>}/>
          <Route path='/houseOwner' element={<House_Owner/>}/>
          <Route path='/search' element={<Search_bar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
