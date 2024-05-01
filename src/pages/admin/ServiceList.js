import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/styles.css';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminSidebar from '../../components/admin/ServiceManagementSidebar';

export default function ServiceList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/services'); // Update endpoint to fetch service data
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching service list:', error);
      }
    };

    fetchServices();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <AdminNavbar />
      <div className='adminhub-content' >
      <AdminSidebar />
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
          <tbody>
            {services.map(service => (
              <tr key={service.service_id}>
                <td>{service.service_type}</td>
                <td>{service.duration}</td>
                <td>{service.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}
