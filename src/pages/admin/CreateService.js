import React, { useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminSidebar from '../../components/admin/ServiceManagementSidebar';

import '../../styles/styles.css';

export default function CreateService() {
  const [formData, setFormData] = useState({
    service_type: '',
    duration: '',
    description: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/services', formData);
      alert('Service created successfully!');
      // Optionally, redirect to another page after successful creation
    } catch (error) {
      console.error('Error creating service:', error);
      alert('Failed to create service. Please try again.');
    }
  };

  return (
    <div className='createService' >
      <AdminNavbar />

      <div className='adminhub-content' >
      <AdminSidebar />


      <div className="create-user-container">
        <h1>Create Service</h1>
        <form className="create-user-form" onSubmit={handleSubmit}>
          <input type="text" name="service_type" placeholder="Service Type" value={formData.service_type} onChange={handleChange} required />
          <input type="text" name="duration" placeholder="Duration" value={formData.duration} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
          <button type="submit">Create Service</button>
        </form>
      </div>
      </div>
    </div>
  );
}
