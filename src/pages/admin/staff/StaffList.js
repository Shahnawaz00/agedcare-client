import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../../components/admin/AdminNavbar';
import AdminSidebar from '../../../components/admin/StaffManagementSidebar';

export default function StaffList() {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    fetchStaffList();
  }, []);

  const fetchStaffList = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/staff');
      setStaffList(response.data);
    } catch (error) {
      console.error('Error fetching staff list:', error);
    }
  };

  const deleteStaff = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/staff/${id}`);
      alert('Staff deleted successfully!');
      fetchStaffList();  // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting staff member:', error);
      alert('Failed to delete staff. Please try again.');
    }
  };

 

  return (
    <div>
      <AdminNavbar />

      <div className='adminhub-content' >

      <AdminSidebar />
      <div className="list-table-div">
        <h2>Staff List</h2>
        <table className="list-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Contact Information</th>
              <th>Qualifications</th>
              <th>Role</th>
              <th>Availability</th>
              <th>Delete</th>
            </tr>
          </thead>
          {staffList.length === 0 ? (
                <div className='loading' ></div>
            ) : (
          <tbody>
            {staffList.map(staff => (
              <tr key={staff.staff_id}>
                <td>{staff.staff_id}</td>
                <td>{staff.name}</td>
                <td>{staff.contact_information}</td>
                <td>{staff.qualifications}</td>
                <td>{staff.role}</td>
                <td>{staff.availability}</td>
                <td>
                    <button onClick={() => deleteStaff(staff.staff_id)}>Delete</button>
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
