import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../../components/admin/AdminNavbar';
import AdminSidebar from '../../../components/admin/InventoryManagementSidebar';

export default function CreateInventory() {
  const [formData, setFormData] = useState({
    medicationId: '',
    quantity: '',
    lastRestocked: '',
  });

  // State to store the list of medications
  const [medications, setMedications] = useState([]);

  // Fetch medications when the component mounts
  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/medication');
        setMedications(response.data);  // Store fetched medications in state
      } catch (error) {
        console.error('Error fetching medications:', error);
      }
    };

    fetchMedications();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/inventory', formData);
      alert('Inventory created successfully!');
      // Reset the form
      setFormData({
        medicationId: '',
        quantity: '',
        lastRestocked: '',
      });
    } catch (error) {
      console.error('Error creating inventory:', error);
      alert('Failed to create inventory. Please try again.');
    }
  };

  return (
    <div className='CreateMember'>
      <AdminNavbar />
      <div className='adminhub-content'>
        <AdminSidebar />
        <div className="create-member-container">
          <h2>Create Inventory</h2>
          <form className="create-user-form" onSubmit={handleSubmit}>
            <select name="medicationId" value={formData.medicationId} onChange={handleChange} required>
              <option value="">Select Medication</option>
              {medications.map((medication) => (
                <option key={medication.medication_id} value={medication.medication_id}>
                  {medication.medication_name}
                </option>
              ))}
            </select>
            <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />
            <input type="date" name="lastRestocked" placeholder="Last Restocked" value={formData.lastRestocked} onChange={handleChange} required />
            <button type="submit">Add Inventory</button>
          </form>
        </div>
      </div>
    </div>
  );
}
