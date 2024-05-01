import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/styles.css'; 
import AdminNavbar from '../../components/AdminNavbar';

export default function MedicationList() {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/medications');
        setMedications(response.data);
      } catch (error) {
        console.error('Error fetching medications:', error);
      }
    };

    fetchMedications();
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className="list-table-div">
        <h2>Medication List</h2>
        <table className="list-table">
          <thead>
            <tr>
              <th>Medication Name</th>
              <th>Dosage Form</th>
              <th>Quantity on Hand</th>
              <th>Expiration Date</th>
            </tr>
          </thead>
          <tbody>
            {medications.map(med => (
              <tr key={med.medication_id}>
                <td>{med.medication_name}</td>
                <td>{med.dosage_form}</td>
                <td>{med.quantity_on_hand}</td>
                <td>{med.expiration_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
