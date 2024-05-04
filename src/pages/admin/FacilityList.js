import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/styles.css';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminSidebar from '../../components/admin/FacilityManagementSidebar';

export default function FacilityList() {
  const [facilities, setFacilities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/facility');
      setFacilities(response.data);
    } catch (error) {
      console.error('Error fetching facilities:', error);
    }
  };

  const deleteFacility = async (facilityId) => {
    try {
      await axios.delete(`http://localhost:5000/api/facility/${facilityId}`);
      alert('Facility deleted successfully!');
      fetchFacilities();  // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting facility:', error);
      alert('Failed to delete facility. Please try again.');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFacilities = facilities.filter(facility =>
    facility.room_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
    facility.occupancy_status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    facility.reservation_length.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (facility.date_reserved && formatDate(facility.date_reserved).toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <AdminNavbar />
      <div className='adminhub-content'>
        <AdminSidebar />
        <div className="list-table-div">
          <h2>Facility List</h2>
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
                <th>Room Number</th>
                <th>Occupancy Status</th>
                <th>Reservation Length</th>
                <th>Date Reserved</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredFacilities.map(facility => (
                <tr key={facility.facility_id}>
                  <td>{facility.room_number}</td>
                  <td>{facility.occupancy_status}</td>
                  <td>{facility.reservation_length}</td>
                  <td>{facility.date_reserved ? formatDate(facility.date_reserved) : 'N/A'}</td>
                  <td>
                    <button onClick={() => deleteFacility(facility.facility_id)}>Delete</button>
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
