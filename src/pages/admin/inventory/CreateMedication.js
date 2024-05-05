import React, { useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../../../components/admin/AdminNavbar';
import AdminSidebar from '../../../components/admin/InventoryManagementSidebar';

export default function CreateMedication() {
  const [formData, setFormData] = useState({
    medication_name: '',
    dosage_form: '',
    expiration_date: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/medication', formData);
      alert('Medication created successfully!');
      // Optionally, redirect to another page after successful creation
    } catch (error) {
        console.log(formData);
      console.error('Error creating medication:', error);
      alert('Failed to create medication. Please try again.');
    }
  };

  return (
    <div className='CreateMember'>
      <AdminNavbar />
      <div className='adminhub-content' >
        <AdminSidebar />
      <div className="create-member-container">
        <h2>Create Medication</h2>
        <form className="create-user-form" onSubmit={handleSubmit}>
          <input type="text" name="medication_name" placeholder="Medication Name" value={formData.medication_name} onChange={handleChange} required />
          <input type="text" name="dosage_form" placeholder="Dosage Form" value={formData.dosage_form} onChange={handleChange} required />
          <input type="date" name="expiration_date" placeholder="Expiration Date" value={formData.expiration_date} onChange={handleChange} required />
          <button type="submit">Add Medication</button>
        </form>
      </div>
      </div>
    </div>
  );
}
