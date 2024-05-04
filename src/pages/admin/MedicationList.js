import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/styles.css'; 
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminSidebar from '../../components/admin/InventoryManagementSidebar';

export default function MedicationList() {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    fetchMedications();
  }, []);

  const fetchMedications = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/medication');
      setMedications(response.data);
    } catch (error) {
      console.error('Error fetching medications:', error);
    }
  };

  const deleteMedication = async (medicationId) => {
    try {
      await axios.delete(`http://localhost:5000/api/medication/${medicationId}`);
      alert('Medication deleted successfully!');
      fetchMedications();  // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting medication:', error);
      alert('Failed to delete medication. Please try again.');
    }
  };

    // Function to convert SQL datetime format to a readable date
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    };
  

  return (
    <div>
      <AdminNavbar />
      <div className='adminhub-content' >
        <AdminSidebar />
      <div className="list-table-div">
        <h2>Medication List</h2>
        <table className="list-table">
          <thead>
            <tr>
              <th>Medication Name</th>
              <th>Dosage Form</th>
              <th>Expiration Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {medications.map(med => (
              <tr key={med.medication_id}>
                <td>{med.medication_name}</td>
                <td>{med.dosage_form}</td>
                <td>{formatDate(med.expiration_date)}</td>
                <td>
                    <button onClick={() => deleteMedication(med.medication_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}
