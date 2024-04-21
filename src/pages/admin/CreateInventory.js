import React, { useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../../components/AdminNavbar';
// import '../../styles/CreateMember.css'; // Import CSS file

export default function CreateMedication() {
  const [formData, setFormData] = useState({
    medicationId: '',
    quantity: '',
    lastRestocked: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/inventories', formData);
      alert('Inventory created successfully!');
      // Optionally, redirect to another page after successful creation
    } catch (error) {
        console.log(formData);
      console.error('Error creating inventory:', error);
      alert('Failed to create inventory. Please try again.');
    }
  };

  return (
    <div className='CreateMember'>
      <AdminNavbar />
      <button className='back-button' onClick={() => window.history.back()}>Back</button>
      <div className="create-member-container">
        <h1>Create Inventory</h1>
        <form className="create-member-form" onSubmit={handleSubmit}>
          <select name="medicationId" value={formData.medicationId} onChange={handleChange} required>
            <option value="">Select Medication</option>
          </select>
          <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />
          <input type="date" name="lastRestocked" placeholder="Last Restocked" value={formData.lastRestocked} onChange={handleChange} required />
          <button type="submit">Add Inventory</button>
        </form>
      </div>
    </div>
  );
}
