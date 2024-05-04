import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/styles.css';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminSidebar from '../../components/admin/AdminManagementSidebar';

export default function AdminList() {
  const [admins, setAdmins] = useState([]);

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

  return (  
    <div>
      <AdminNavbar />
      <div className='adminhub-content'>
        <AdminSidebar />
        <div className="list-table-div">
          <h2>Admin List</h2>
          <table className="list-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {admins.map(admin => (
                <tr key={admin.admin_id}>
                  <td>{admin.admin_id}</td>
                  <td>{admin.name}</td>
                  <td>{admin.email}</td>
                  <td>
                    <button onClick={() => deleteAdmin(admin.admin_id)}>Delete</button>
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
