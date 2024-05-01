import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/styles.css'; // Assume similar CSS styles as PatientList.css
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

   // Function to convert SQL datetime format to a readable date
   const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  return (
    <div>
      <AdminNavbar />
      <div className="list-table-div">
        <h2>Inventory List</h2>
        <table className="list-table">
          <thead>
            <tr>
              <th>Inventory ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Last Restocked</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map(item => (
              <tr key={item.inventory_id}>
                <td>{item.inventory_id}</td>
                <td>{item.name}</td> {/* Adjusted from item.medication.medication_name to item.name */}
                <td>{item.quantity}</td>
                <td>{formatDate(item.last_restocked)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
