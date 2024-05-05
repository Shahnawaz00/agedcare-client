import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/styles.css';
import StaffNavbar from '../../components/staff/StaffNavbar';


export default function StaffServiceList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching service list:', error);
    }
  };



  return (
    <div>
      <StaffNavbar />
      <div className='adminhub-content' >

      <div className="list-table-div">
        <h2>Service List</h2>
        <table className="list-table">
          <thead>
            <tr>
              <th>Service Type</th>
              <th>Duration</th>
              <th>Description</th>


            </tr>
          </thead>
          {services.length === 0 ? (
                <div className='loading' ></div>
            ) : (

          <tbody>
            {services.map(service => (
              <tr key={service.service_id}>
                <td>{service.service_type}</td>
                <td>{service.duration}</td>
                <td>{service.description}</td>

              </tr>
            ))}
          </tbody>
          )}
        </table>
      </div>
      </div>
    </div>
  );
}
