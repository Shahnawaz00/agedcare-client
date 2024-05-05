import React, { useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../../../components/admin/AdminNavbar';
import AdminSidebar from '../../../components/admin/MemberManagementSidebar';

export default function CreateMember() {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    gender: '',
    emergencyContact: '',
    nextOfKin: '',
    mailingAddress: '',
    allergiesOrDiet: '',
    currentMedications: '',
    generalPractitioner: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/members', formData);
      alert('Member created successfully!');
      // Optionally, redirect to another page after successful creation
    } catch (error) {
        console.log(formData);
      console.error('Error creating member:', error);
      alert('Failed to create member. Please try again.');
    }
  };

  return (
    <div className='CreateUser' >
      <AdminNavbar />
      <div className='adminhub-content' >

      <AdminSidebar />
      <div className="create-user-container">
        <h2>Create Member</h2>
        <form className="create-user-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="date" name="dateOfBirth" placeholder="Date of Birth" value={formData.dateOfBirth} onChange={handleChange} required />
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input type="text" name="emergencyContact" placeholder="Emergency Contact" value={formData.emergencyContact} onChange={handleChange} />
          <input type="text" name="nextOfKin" placeholder="Next of Kin" value={formData.nextOfKin} onChange={handleChange} />
          <input type="text" name="mailingAddress" placeholder="Mailing Address" value={formData.mailingAddress} onChange={handleChange} />
          <input type="text" name="allergiesOrDiet" placeholder="Allergies/Diet" value={formData.allergiesOrDiet} onChange={handleChange} />
          <input type="text" name="currentMedications" placeholder="Current Medications" value={formData.currentMedications} onChange={handleChange} />
          <input type="text" name="generalPractitioner" placeholder="General Practitioner" value={formData.generalPractitioner} onChange={handleChange} />
          <button type="submit">Create Member</button>
        </form>
      </div>
      </div>
    </div>
  );
}
