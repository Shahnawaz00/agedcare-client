import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../../components/admin/AdminNavbar';
import AdminSidebar from '../../../components/admin/ServiceManagementSidebar';
import { Link } from 'react-router-dom';

export default function ServiceList() {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const deleteService = async (serviceId) => {
    try {
      await axios.delete(`http://localhost:5000/api/services/${serviceId}`);
      alert('Service deleted successfully!');
      fetchServices();  // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting service:', error);
      alert('Failed to delete service. Please try again.');
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredServices = services.filter(service =>
    service.service_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.duration.toString().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <AdminNavbar />
      <div className='adminhub-content'>
        <AdminSidebar />
        <div className="list-table-div">
          <h2>Service List</h2>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          />
          <table className="list-table">
            <thead>
              <tr>
                <th>Service Type</th>
                <th>Duration</th>
                <th>Description</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            {services.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center' }}>No services found or loading data</td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {filteredServices.map(service => (
                  <tr key={service.service_id}>
                    <td>{service.service_type}</td>
                    <td>{service.duration}</td>
                    <td>{service.description}</td>
                    <td>
                      <Link className="edit-link" to={`/admin/record-service/${service.service_id}`}>Edit</Link>
                      &nbsp;|&nbsp;
                      <button onClick={() => deleteService(service.service_id)}>Delete</button>
                    </td>
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
