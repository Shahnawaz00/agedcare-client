import React, { useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminSidebar from '../../components/admin/StaffManagementSidebar';

export default function CreateStaff() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contact_information: '',
    qualifications: '',
    role: '',
    availability: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/staff', formData);
      alert('Staff created successfully!');
      // Optionally, redirect to another page after successful creation
    } catch (error) {
      console.error('Error creating staff:', error);
      alert('Failed to create staff. Please try again.');
    }
  };

  return (
    <div className='createUser' >
      <AdminNavbar />
      <div className='adminhub-content' >
      <AdminSidebar />
      <div className="create-user-container">
        <h2>Create Staff</h2>
        <form className="create-user-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input type="text" name="contact_information" placeholder="Contact Information" value={formData.contact_information} onChange={handleChange} required />
          <input type="text" name="qualifications" placeholder="Qualifications" value={formData.qualifications} onChange={handleChange} required />
          <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} required />
          <input type="text" name="availability" placeholder="Availability" value={formData.availability} onChange={handleChange} required />
          <button type="submit">Create Staff</button>
        </form>
      </div>
      </div>
    </div>
  );
}
