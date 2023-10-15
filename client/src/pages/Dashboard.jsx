import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import "../css/Dashboard.css";
import home from '../assets/home.png'
import owner from '../assets/broker.png'
import visitor from '../assets/visitors.png'
import staff from '../assets/staff.png'
import security from '../assets/policeman.png'
import car from '../assets/parking.png'
import guard from '../assets/guard.jpg'

const secure = [
  {
    name: "สมยง คงกระพัน",
    image : guard,
  },
  {
    name: "เศรษฐิน ทวิสา",
    image : guard,
  },
  {
    name: "เอโดงาวะ โคตวย",
    image : guard,
  }
]

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);

 
  return (
    <div className=" flex h-screen w-screen">
      <Navbar />
      <div class=" h-screen  bg-slate-100 px-16 py-5 grid grid-cols-3 grid-row-10 w-full gap-5">
        <div className="p-5 bg-white  rounded-lg col-span-1  row-span-2">
          
          <div className=" flex items-center ">
            <img src={home} alt="" className=" w-12"/>
            <span className="ml-5 text-xl font-bold">House</span>
          </div>
          <div className=" py-5 flex justify-center">
            <span className=" text-5xl font-bold">49</span>
          </div>
          <div className=" flex justify-center">
           <span className="text-xl font-bold">หลัง</span>
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg col-span-1 row-span-2">
        <div className=" flex items-center">
          <img src={owner} alt="" className=" w-12"/>
          <span className="ml-5 text-xl font-bold">Owner</span>
          </div>
          <div className=" py-5 flex justify-center">
            <span className=" text-5xl font-bold">49</span>
          </div>
          <div className="  flex justify-center">
            <span className=" text-xl font-bold">คน</span>
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg row-span-4 col-span-3 " >
        <div className=" flex items-center">
          <img src={car} alt="" className=" w-12"/>
            <span className="ml-5 text-xl font-bold">latest</span>
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg col-span-1 row-span-2">
        <div className=" flex items-center">
          <img src={visitor} alt="" className=" w-12"/>
            <span className="ml-5 text-xl font-bold">Visitor</span>
          </div>
          <div className=" py-5 flex justify-center">
           <span className=" text-5xl font-bold">12</span>
          </div>
          <div className=" flex justify-center">
           <span className=" text-xl font-bold">คน</span>
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg col-span-1 row-span-2">
        <div className=" flex items-center">
          <img src={staff} alt="" className=" w-12"/>
            <span className="ml-5 text-xl font-bold">Staff</span>
          </div>
          <div className=" py-5 flex justify-center">
           <span className=" text-5xl font-bold">100</span>
          </div>
          <div className="flex justify-center">
            <span className="text-xl font-bold">คน</span>
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg col-span-5 row-span-4">
        <div className=" flex items-center">
          <img src={security} alt="" className=" w-12"/>
            <span className="ml-5 text-xl font-bold">Security</span>
          </div>
         
          <div className=" flex justify-between mt-5">
          {secure.map((data,index)=>(
            <div key={index} className=" flex items-center p-3 border-2 w-1/5 rounded-sm">
              <img src={data.image} alt="" className=" w-16 h-16 rounded-full"/>
              <span className="ml-5">{data.name} <br /> Sec654235456</span>
            </div>
          ))}
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;
