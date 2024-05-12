import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../../components/admin/AdminNavbar';
import AdminSidebar from '../../../components/admin/InventoryManagementSidebar';
import { Link } from 'react-router-dom';

export default function InventoryList() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/inventory');
      setInventory(response.data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
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
          <h2>Inventory List</h2>
          <table className="list-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Last Restocked</th>
                <th>Edit</th>
              </tr>
            </thead>
            {inventory.length === 0 ? (
                <div className='loading' ></div>
            ) : (
            <tbody>
              {inventory.map(item => (
                <tr key={item.inventory_id}>
                  <td>{item.medication_id}</td>
                  <td>{item.quantity}</td>
                  <td>{formatDate(item.last_restocked)}</td>
                  <td>
                    <Link className="edit-link" to={`/admin/record-inventory/${item.inventory_id}`}>Edit</Link>
                  </td>
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
