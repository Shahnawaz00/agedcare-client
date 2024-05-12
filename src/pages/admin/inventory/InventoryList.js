import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../../components/admin/AdminNavbar';
import AdminSidebar from '../../../components/admin/InventoryManagementSidebar';
import { Link } from 'react-router-dom';

export default function InventoryList() {
  const [inventory, setInventory] = useState([]);
  const [medications, setMedications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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
  const deleteInventory = async (inventoryId) => {
    try {
      await axios.delete(`http://localhost:5000/api/inventory/${inventoryId}`);
      alert('Inventory item deleted successfully!');
      fetchInventory();  // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting inventory item:', error);
      alert('Failed to delete inventory item. Please try again.');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const getMedicationName = (medicationId) => {
    const medication = medications.find(med => med.medication_id === medicationId);
    return medication ? medication.medication_name : 'Unknown';
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredInventory = inventory.filter(item =>
    getMedicationName(item.medication_id).toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.quantity.toString().includes(searchTerm.toLowerCase()) ||
    formatDate(item.last_restocked).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <AdminNavbar />
      <div className='adminhub-content'>
        <AdminSidebar />
        <div className="list-table-div">
          <h2>Inventory List</h2>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          />
          <table className="list-table">
            <thead>
              <tr>
                <th>Inventory ID</th>
                <th>Medication Name</th>
                <th>Quantity</th>
                <th>Last Restocked</th>
                <th>Edit</th>
              </tr>
            </thead>
            {inventory.length === 0 ? (
                <div className='loading' ></div>
            ) : (
            <tbody>
              {filteredInventory.map(item => (
                <tr key={item.inventory_id}>
                  <td>{item.inventory_id}</td>
                  <td>{getMedicationName(item.medication_id)}</td>
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
