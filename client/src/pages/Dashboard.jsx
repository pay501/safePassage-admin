import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import "../css/Dashboard.css";

function Dashboard() {
  
  const navigate = useNavigate();

  const logoutBtn =(e)=>{
    e.preventDefault();
    localStorage.setItem('token','')
    navigate('/')
  }

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(!token){
      navigate('/')
  }
  },[])
  
  return (
    <div>
      <Navbar/>
      <button onClick={logoutBtn}>Logout</button>
    </div>
  )
}

export default Dashboard