import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminNavbar from '../../components/AdminNavbar';
import '../../styles/AdminHub.css';

export default function CreateService() {
  const [formData, setFormData] = useState({
    service_type: '',
    duration: '',
    description: ''
  });
  const [success, setSuccess] = useState(true);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/services', formData);
      alert('Service created successfully!');
      setFormData({
        service_type: '',
        duration: '',
        description: ''
      });
      setSuccess(true);
    } catch (error) {
      console.error('Error creating service:', error);
      setSuccess(false);
      alert('Failed to create service. Please try again.');
    }
  };

  return (
    <div className='createService' >
      <AdminNavbar />
      <button className='back-button' onClick={() => window.history.back()}>Back</button>
      <div className="create-user-container">
        <h1>Create Service</h1>
        <form className="create-user-form" onSubmit={handleSubmit}>
          <input type="text" name="service_type" placeholder="Service Type" value={formData.service_type} onChange={handleChange} required />
          <input type="text" name="duration" placeholder="Duration" value={formData.duration} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
          <button type="submit">Create Service</button>
          {success && (
            <div className="success-message">
              Service created successfully! View the service <Link to='admin/service-list' >here</Link>.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
