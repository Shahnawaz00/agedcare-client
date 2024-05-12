import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../../components/admin/AdminNavbar';
import AdminSidebar from '../../../components/admin/MemberManagementSidebar';
import { Link } from 'react-router-dom';

export default function PatientList() {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    formatDate(member.date_of_birth).toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.emergency_contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.next_of_kin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.mailing_address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.allergies_or_diet.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.current_medications.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.general_practitioner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <AdminNavbar />
      <div className='adminhub-content'>
        <AdminSidebar />
        <div className='list-table-div'>
          <h2>Member List</h2>
          <input
            type="text"
            placeholder="Search members..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          />
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
            {filteredMembers.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan="10" style={{ textAlign: 'center' }}>No matching members found</td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {filteredMembers.map(member => (
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
