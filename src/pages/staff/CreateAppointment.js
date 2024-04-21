import React, { useState } from 'react';
import axios from 'axios';
import StaffNavbar from '../../components/StaffNavbar';

export default function CreateAppointment() {
  const [formData, setFormData] = useState({
    memberId: '',
    staffId: '',
    serviceId: '',
    facilityId: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/appointments', formData);
      alert('Appointment created successfully!');
      // Optionally, redirect to another page after successful creation
    } catch (error) {
      console.error('Error creating appointment:', error);
      alert('Failed to create appointment. Please try again.');
    }
  };

  return (
    <div className='CreateAppointment' >
      <StaffNavbar />
      <button className='back-button' onClick={() => window.history.back()}>Back</button>
      <div className="create-appointment-container">
        <h1>Create Appointment</h1>
        <form className="create-appointment-form" onSubmit={handleSubmit}>
          <input type="number" name="memberId" placeholder="Member ID" value={formData.memberId} onChange={handleChange} required />
          <input type="number" name="staffId" placeholder="Staff ID" value={formData.staffId} onChange={handleChange} required />
          <input type="number" name="serviceId" placeholder="Service ID" value={formData.serviceId} onChange={handleChange} required />
          <input type="number" name="facilityId" placeholder="Facility ID" value={formData.facilityId} onChange={handleChange} required />
          <input type="date" name="date" placeholder="Date" value={formData.date} onChange={handleChange} required />
          <input type="time" name="time" placeholder="Time" value={formData.time} onChange={handleChange} required />
          <input type="text" name="notes" placeholder="Notes" value={formData.notes} onChange={handleChange} />
          <button type="submit">Create Appointment</button>
        </form>
      </div>
    </div>
  );
}