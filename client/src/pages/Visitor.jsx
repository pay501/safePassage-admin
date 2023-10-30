import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Visitor() {
  const [state, setData] = useState([]);

  const fetchData = async () => {
    await axios
      .get(`http://localhost:1510/apis/getAllData`)
      .then((response) => {
        setData(response.data.visitor);
        console.log(response.data.visitor);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" flex w-screen h-screen ">
      <Navbar />
      <div className="w-full  justify-center items-center">
        
        <div className="relative overflow-auto w-full h-full">
          
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  License Template
                </th>
                <th scope="col" className="px-6 py-3">
                  type
                </th>
                <th scope="col" className="px-6 py-3">
                  entry time
                </th>
                <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                  exit time
                </th>
                <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                  access by
                </th>
              </tr>
            </thead>
            <tbody>
              {state.map((data, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer"
                  >
                    <Link to={`/detail/${data.id_visitor}`}>
                     <p className=" hover:text-blue-500 hover:font-bold">{data.license_template}</p>
                    </Link>
                  </th>
                  <td className="px-6 py-4">
                    <p>{data.type}</p>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    {data.entry_time === null ?<p>-</p> :<p>{data.entry_time}</p>}
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                  {data.exit_time === null ?<p>-</p> :<p>{data.exit_time}</p>}
                  </td>
                  <td className="px-6 py-4">
                  {data.assace_by === null ?<p>-</p> :<p>{data.assace_by}</p>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Visitor;
