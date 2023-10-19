import React from 'react'
import { useNavigate } from 'react-router-dom'
function Menu({icon,name,path}) {
  const navigate = useNavigate()
  return (
    <div>
        <div className=' flex items-center px-5 py-3' onClick={()=>navigate(`${path}`)}>
            <div>{icon}</div>
            <span className=' ml-3'>{name}</span>
            
        </div>
    </div>
  )
}

export default Menu