import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../../components/admin/AdminNavbar';
import AdminSidebar from '../../../components/admin/AdminManagementSidebar';
import { Link } from 'react-router-dom';

export default function AdminList() {
  const [admins, setAdmins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin');
      setAdmins(response.data);
    } catch (error) {
      console.error('Error fetching admins:', error);
    }
  };

  const deleteAdmin = async (admin_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/${admin_id}`);
      alert('Admin deleted successfully!');
      fetchAdmins();  // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting admin:', error);
      alert('Failed to delete admin. Please try again.');
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAdmins = admins.filter(admin =>
    admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    admin.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (  
    <div>
      <AdminNavbar />
      <div className='adminhub-content'>
        <AdminSidebar />
        <div className="list-table-div">
          <h2>Admin List</h2>
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
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
              </tr>
            </thead>
            {admins.length === 0 ? (
                <div className='loading' ></div>
            ) : (
                <tbody>
              {admins.map(admin => (
            <tbody>
              {filteredAdmins.map(admin => (
                <tr key={admin.admin_id}>
                  <td>{admin.admin_id}</td>
                  <td>{admin.name}</td>
                  <td>{admin.email}</td>
                  <td>
                    <Link className="edit-link" to={`/admin/record-admin/${admin.admin_id}`}>Edit</Link>
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
