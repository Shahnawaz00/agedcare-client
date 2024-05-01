import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/styles.css';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminSidebar from '../../components/admin/MemberManagementSidebar';

export default function PatientList() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/members');
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    } 
  };

  const deleteMember = async (memberId) => {
    try {
      await axios.delete(`http://localhost:5000/api/members/${memberId}`);
      alert('Member deleted successfully!');
      // Refresh the list after deletion
      setMembers(members.filter(member => member.member_id !== memberId));
    } catch (error) {
      console.error('Error deleting member:', error);
      alert('Failed to delete member. Please try again.');
    }
  };

// Function to convert SQL datetime format to a readable date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};


  return (
    <div  >
      <AdminNavbar />
      <div className='adminhub-content' >

      <AdminSidebar />
      <div className='list-table-div'>
      <h2>Member List</h2>
      <table className="list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Emergency Contact</th>
            <th>Next of Kin</th>
            <th>Mailing Address</th>
            <th>Allergies/Diet</th>
            <th>Current Medications</th>
            <th>General Practitioner</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member.member_id}>
              <td>{member.name}</td>
              <td>{formatDate(member.date_of_birth)}</td>
              <td>{member.gender}</td>
              <td>{member.emergency_contact}</td>
              <td>{member.next_of_kin}</td>
              <td>{member.mailing_address}</td>
              <td>{member.allergies_or_diet}</td>
              <td>{member.current_medications}</td>
              <td>{member.general_practitioner}</td>
              <td><button onClick={() => deleteMember(member.member_id)}>Delete</button> </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>  
    </div>
  );
}
