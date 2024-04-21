import React, { useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../../components/AdminNavbar';
// import '../../styles/CreateMember.css'; // Import CSS file

export default function CreateService() {
  const [formData, setFormData] = useState({
    name: '',
    contactInformation: '',
    qualifications: '',
    role: '',
    availability: '',
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
        console.log(formData);
      console.error('Error creating service:', error);
      alert('Failed to create service. Please try again.');
    }
  };

  return (
    <div className='CreateMember'>
      <AdminNavbar />
      <button className='back-button' onClick={() => window.history.back()}>Back</button>
      <div className="create-member-container">
        <h1>Create Service</h1>
        <form className="create-member-form" onSubmit={handleSubmit}>
          <input type="text" name="serviceType" placeholder="Service Type" value={formData.serviceType} onChange={handleChange} required />
          <input type="text" name="duration" placeholder="Duration" value={formData.duration} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
          <button type="submit">Create Service</button>
        </form>
      </div>
    </div>
  );
}