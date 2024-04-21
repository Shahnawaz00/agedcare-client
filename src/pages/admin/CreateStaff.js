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
      await axios.post('http://localhost:5000/api/staffs', formData);
      alert('Staff created successfully!');
      // Optionally, redirect to another page after successful creation
    } catch (error) {
        console.log(formData);
      console.error('Error creating staff:', error);
      alert('Failed to create staff. Please try again.');
    }
  };

  return (
    <div className='CreateMember' >
      <AdminNavbar />
      <button className='back-button' onClick={() => window.history.back()}>Back</button>
      <div className="create-member-container">
        <h1>Create Staff</h1>
        <form className="create-member-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="contactInformation" placeholder="Contact Information" value={formData.contactInformation} onChange={handleChange} required />
          <input type="text" name="qualifications" placeholder="Qualifications" value={formData.qualifications} onChange={handleChange} required />
          <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} required />
          <input type="text" name="availability" placeholder="Availability" value={formData.availability} onChange={handleChange} required />
          <button type="submit">Create Staff</button>
        </form>
      </div>
    </div>
  );
}