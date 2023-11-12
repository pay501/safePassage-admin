import { DateRangePicker} from 'rsuite';
import '../pages/Date.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import Navbar from "../components/Navbar";
function Date() {
  const [date, setDate] = useState([]);
  const [res, setRes] = useState('');

  const formatDate = async (dateArray) => {
    if (dateArray && dateArray.length === 2) {
      const startDate = moment(dateArray[0]).format('YYYY-MM-DD HH:mm:ss');
      const endDate = moment(dateArray[1]).format('YYYY-MM-DD HH:mm:ss');

      try {
        const response = await axios.post(`http://localhost:1510/apis/search_date`, {
          start: startDate,
          end: endDate,
        });
        setRes(response.data[0]);
      } catch (err) {
        console.error(err);
        alert('Error fetching data');
      }
    }
  };

  useEffect(() => {
    // You can include any initial API calls or other logic here
    formatDate(date)
  }, [date]); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className='flex w-screen h-screen'>
      <Navbar/>
      <div className='flex justify-center items-center w-full h-full flex-col'>
      <DateRangePicker
        format='yyyy-MM-dd HH:mm:ss'
        onOk={(value) => setDate(value)}
      />
      <div>
        {res && res.length > 0 ? (
          res.map((item, index) => (
            <div key={index}>
              บ้านเลขที่: {item.OwnerHouse} เวลาเข้า: {item.InTime} เวลาออก: {item.OutTime}
            </div>
          ))
        ) : (
          <p>No data selected</p>
        )}
      </div> 
    </div>
    </div>
  );
}

export default Date;
