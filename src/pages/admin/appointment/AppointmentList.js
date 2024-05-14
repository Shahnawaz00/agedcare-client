import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../../components/admin/AdminNavbar';
import AdminSidebar from '../../../components/admin/AppointmentManagementSidebar';
import { Link } from 'react-router-dom';

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/appointments');
        const appointmentsData = await Promise.all(response.data.map(async appointment => {
          const memberResponse = await axios.get(`http://localhost:5000/api/members/${appointment.member_id}`);
          const staffResponse = await axios.get(`http://localhost:5000/api/staff/${appointment.staff_id}`);
          const serviceResponse = await axios.get(`http://localhost:5000/api/services/${appointment.service_id}`);
          const facilityResponse = await axios.get(`http://localhost:5000/api/facility/${appointment.facility_id}`);
          return {
            ...appointment,
            member_name: memberResponse.data.name,
            staff_name: staffResponse.data.name,
            service_name: serviceResponse.data.service_type,
            facility_name: facilityResponse.data.room_number,
          };
        }));
        setAppointments(appointmentsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching appointments:', error);
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAppointments = searchTerm.length > 0 ? appointments.filter(appointment =>
    appointment.member_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.staff_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.service_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.facility_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    formatDate(appointment.appointment_date).includes(searchTerm.toLowerCase()) ||
    appointment.appointment_time.toLowerCase().includes(searchTerm.toLowerCase())
  ) : appointments;

  return (
    <div>
      <AdminNavbar />
      <div className='adminhub-content'>
        <AdminSidebar />
        <div className="list-table-div">
          <h2>Appointment List</h2>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          />
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="list-table">
              <thead>
                <tr>
                  <th>Appointment ID</th>
                  <th>Member Name</th>
                  <th>Staff Name</th>
                  <th>Service Type</th>
                  <th>Facility Room Number</th>
                  <th>Appointment Date</th>
                  <th>Appointment Time</th>
                  {/* <th>Notes</th> */}
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.length > 0 ? filteredAppointments.map(appointment => (
                  <tr key={appointment.appointment_id}>
                    <td>{appointment.appointment_id}</td>
                    <td>{appointment.member_name}</td>
                    <td>{appointment.staff_name}</td>
                    <td>{appointment.service_name}</td>
                    <td>{appointment.facility_name}</td>
                    <td>{formatDate(appointment.appointment_date)}</td>
                    <td>{appointment.appointment_time}</td>
                    {/* <td>{appointment.notes}</td> */}
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="7">No appointments found</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
