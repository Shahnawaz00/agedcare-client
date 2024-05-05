import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/styles.css';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminSidebar from '../../components/admin/FacilityManagementSidebar';  // Correct import
import { useParams, useNavigate } from 'react-router-dom';  // Import useNavigate for redirection

export default function RecordFacility() {
  const [facility, setFacility] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();  // For redirecting after deleting

  useEffect(() => {
    const fetchFacility = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/facility/${id}`);
        setFacility(response.data);
      } catch (error) {
        console.error('Error fetching facility details:', error);
      }
    };

    fetchFacility();
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const deleteFacility = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/facility/${id}`);
      alert('Facility deleted successfully!');
      navigate('/admin/facility-list');  // Redirect to the facility list after deletion
    } catch (error) {
      console.error('Error deleting facility:', error);
      alert('Failed to delete facility. Please try again.');
    }
  };

  if (!facility) {
    return (
      <div>
        <AdminNavbar />
        <div className='adminhub-content'>
          <AdminSidebar />
          <div>Loading facility details...</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <AdminNavbar />
      <div className='adminhub-content'>
        <AdminSidebar />
        <div className="list-table-div">
          <h2>Facility Details</h2>
          <table className="list-table">
            <thead>
              <tr>
                <th>Room Number</th>
                <th>Occupancy Status</th>
                <th>Reservation Length</th>
                <th>Date Reserved</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{facility.room_number}</td>
                <td>{facility.occupancy_status}</td>
                <td>{facility.reservation_length}</td>
                <td>{facility.date_reserved ? formatDate(facility.date_reserved) : 'N/A'}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={deleteFacility} style={{ margin: "20px", padding: "10px" }}>Delete Facility</button>
        </div>
      </div>
    </div>
  );
}
