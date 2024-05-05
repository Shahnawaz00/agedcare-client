import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/styles.css';
import StaffNavbar from '../../components/staff/StaffNavbar';
import StaffSidebar from '../../components/staff/StaffSidebar';

export default function StaffInventoryList() {
  const [inventory, setInventory] = useState([]);
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    fetchInventory();
    fetchMedications();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/inventory');
      setInventory(response.data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };

  const fetchMedications = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/medication');
      setMedications(response.data); // Store medications in state
    } catch (error) {
      console.error('Error fetching medications:', error);
    }
  };

  

  // Function to convert SQL datetime format to a readable date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  // Helper function to find medication name by ID
  const getMedicationName = (medicationId) => {
    const medication = medications.find(med => med.medication_id === medicationId);
    return medication ? medication.medication_name : 'Unknown';
  };

  return (
    <div>
      <StaffNavbar />
      <div className='adminhub-content' >

        <div className="list-table-div">
          <h2>Inventory List</h2>
          <table className="list-table">
            <thead>
              <tr>
                <th>Inventory ID</th>
                <th>Medication Name</th>
                <th>Quantity</th>
                <th>Last Restocked</th>

              </tr>
            </thead>
            {inventory.length === 0 ? (
                <div className='loading' ></div>
            ) : (
            <tbody>
              {inventory.map(item => (
                <tr key={item.inventory_id}>
                  <td>{item.inventory_id}</td>
                  <td>{getMedicationName(item.medication_id)}</td>
                  <td>{item.quantity}</td>
                  <td>{formatDate(item.last_restocked)}</td>

                </tr>
              ))}
            </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
