import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import owner from '../assets/broker.png';
import home from '../assets/home.png';
import car from '../assets/parking.png';
import security from '../assets/policeman.png';
import staff from '../assets/staff.png';
import visitorImage from '../assets/visitors.png';
import Navbar from "../component/Navbar";
import "../css/Dashboard.css";



function Dashboard() {
  const navigate = useNavigate();
  const [houseOwner,setHouseOwner] = useState('')
  const [visitor, setVisitor] = useState('')
  const [securityGuard, setSecurityGuard] = useState('')
  const [currentSecurityGuard ,setCurrentSecurityGuard] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);

  useEffect(()=>{
    axios.get('http://localhost:1510/apis/getData')
    .then(res=>{
      setHouseOwner(res.data.houseOwner);
      setVisitor(res.data.visitor)
      setSecurityGuard(res.data.securityGuard)
    })
  },[]);
  useEffect(()=>{
    axios.get('http://localhost:1510/apis/getSecurity')
    .then(res=>{
      setCurrentSecurityGuard(res.data)
    })
  },[])

  return (
    <div className=" flex h-screen w-screen">
      <Navbar />
      <div className=" h-screen  bg-slate-100 px-16 py-5 grid grid-cols-3 grid-row-10 w-full gap-5">
        <div className="p-5 bg-white  rounded-lg col-span-1  row-span-2">

          <div className=" flex items-center ">
            <img src={home} alt="" className=" w-12" />
            <span className="ml-5 text-xl font-bold">House</span>
          </div>
          <div className=" py-5 flex justify-center">
            <span className=" text-5xl font-bold">{houseOwner}</span>
          </div>
          <div className=" flex justify-center">
            <span className="text-xl font-bold">หลัง</span>
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg col-span-1 row-span-2">
          <div className=" flex items-center">
            <img src={owner} alt="" className=" w-12" />
            <span className="ml-5 text-xl font-bold">Owner</span>
          </div>
          <div className=" py-5 flex justify-center">
            <span className=" text-5xl font-bold">{houseOwner}</span>
          </div>
          <div className="  flex justify-center">
            <span className=" text-xl font-bold">คน</span>
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg row-span-4 col-span-3 " >
          <div className=" flex items-center">
            <img src={car} alt="" className=" w-12" />
            <span className="ml-5 text-xl font-bold">latest</span>
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg col-span-1 row-span-2">
          <div className=" flex items-center">
            <img src={visitorImage} alt="" className=" w-12" />
            <span className="ml-5 text-xl font-bold">Visitor</span>
          </div>
          <div className=" py-5 flex justify-center">
            <span className=" text-5xl font-bold">{visitor}</span>
          </div>
          <div className=" flex justify-center">
            <span className=" text-xl font-bold">คน</span>
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg col-span-1 row-span-2">
          <div className=" flex items-center">
            <img src={staff} alt="" className=" w-12" />
            <span className="ml-5 text-xl font-bold">Security Guard</span>
          </div>
          <div className=" py-5 flex justify-center">
            <span className=" text-5xl font-bold">{securityGuard}</span>
          </div>
          <div className="flex justify-center">
            <span className="text-xl font-bold">คน</span>
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg col-span-5 row-span-4">
          <div className=" flex items-center">
            <img src={security} alt="" className=" w-12" />
            <span className="ml-5 text-xl font-bold">Security works now.</span>
          </div>

          <div className=" flex justify-between mt-5">
              <div className=" flex items-center p-3 border-2 w-1/5 rounded-sm">
              <span className="ml-5">{currentSecurityGuard.FirstName} {currentSecurityGuard.LastName}<br />{currentSecurityGuard.ID_SeG}</span>
              </div>
           {/*  {currentSecurityGuard.map((data, index) => (
              <div key={index} className=" flex items-center p-3 border-2 w-1/5 rounded-sm">
                <img src={data.image} alt="" className=" w-16 h-16 rounded-full" />
                <span className="ml-5">{securityGuard.FirstName} <br /> Sec654235456</span>
              </div>
            ))} */}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
/* 
{currentSecurityGuard.FirstName}
{currentSecurityGuard.LastName} */