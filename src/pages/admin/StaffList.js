import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/PatientList.css';
import AdminNavbar from '../../components/AdminNavbar';

export default function StaffList() {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    const fetchStaffList = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/staff'); // Update endpoint to fetch staff data
        setStaffList(response.data);
      } catch (error) {
        console.error('Error fetching staff list:', error);
      }
    };

    fetchStaffList();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <AdminNavbar />
      <div className="list-table-div">
        <h2>Staff List</h2>
        <table className="list-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact Information</th>
              <th>Qualifications</th>
              <th>Role</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map(staff => (
              <tr key={staff.staff_id}>
                <td>{staff.name}</td>
                <td>{staff.contact_information}</td>
                <td>{staff.qualifications}</td>
                <td>{staff.role}</td>
                <td>{staff.availability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
