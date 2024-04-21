import React, { useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../../components/AdminNavbar';
// import '../../styles/CreateMember.css'; // Import CSS file

export default function CreateMedication() {
  const [formData, setFormData] = useState({
    medicationName: '',
    dosageForm: '',
    quantityOnHand: '',
    expirationDate: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/medications', formData);
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
      <button className='back-button' onClick={() => window.history.back()}>Back</button>
      <div className="create-member-container">
        <h1>Create Medication</h1>
        <form className="create-member-form" onSubmit={handleSubmit}>
          <input type="text" name="medicationName" placeholder="Medication Name" value={formData.medicationName} onChange={handleChange} required />
          <input type="text" name="dosageForm" placeholder="Dosage Form" value={formData.dosageForm} onChange={handleChange} required />
          <input type="number" name="quantityOnHand" placeholder="Quantity on Hand" value={formData.quantityOnHand} onChange={handleChange} required />
          <input type="date" name="expirationDate" placeholder="Expiration Date" value={formData.expirationDate} onChange={handleChange} required />
          <button type="submit">Add Medication</button>
        </form>
      </div>
    </div>
  );
}
