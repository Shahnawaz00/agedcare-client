import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../../components/admin/AdminNavbar';
import AdminSidebar from '../../../components/admin/MemberManagementSidebar';
import { Link } from 'react-router-dom';

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
            <th>Edit</th>
          </tr>
        </thead>
        {members.length === 0 ? (
                <div className='loading' ></div>
            ) : (

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
              <td>
                <Link className="edit-link" to={`/admin/record-member/${member.member_id}`}>Edit</Link>
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
