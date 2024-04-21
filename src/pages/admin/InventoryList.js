import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/PatientList.css'; // Assume similar CSS styles as PatientList.css
import AdminNavbar from '../../components/AdminNavbar';

export default function InventoryList() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/inventory');
        setInventory(response.data);
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    };

    fetchInventory();
  }, []);

  return (
    <div>
      <AdminNavbar />
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
          <tbody>
            {inventory.map(item => (
              <tr key={item.inventory_id}>
                <td>{item.inventory_id}</td>
                <td>{item.medication ? item.medication.medication_name : 'N/A'}</td>
                <td>{item.quantity}</td>
                <td>{item.last_restocked}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
