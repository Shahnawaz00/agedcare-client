import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/PatientList.css'; // Assume similar CSS styles as PatientList.css
import AdminNavbar from '../../components/AdminNavbar';

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/appointments');
        const appointmentsData = await Promise.all(response.data.map(async appointment => {
          const memberResponse = await axios.get(`http://localhost:5000/api/members/${appointment.member_id}`);
          const staffResponse = await axios.get(`http://localhost:5000/api/staff/${appointment.staff_id}`);
          const serviceResponse = await axios.get(`http://localhost:5000/api/services/${appointment.service_id}`);
          const facilityResponse = await axios.get(`http://localhost:5000/api/facilities/${appointment.facility_id}`);
          return {
            ...appointment,
            member_name: memberResponse.data.name,
            staff_name: staffResponse.data.name,
            service_name: serviceResponse.data.service_type,
            facility_name: facilityResponse.data.room_number,
          };
        }));
        setAppointments(appointmentsData);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className="list-table-div">
        <h2>Appointment List</h2>
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
            {appointments.map(appointment => (
              <tr key={appointment.appointment_id}>
                <td>{appointment.appointment_id}</td>
                <td>{appointment.member_name}</td>
                <td>{appointment.staff_name}</td>
                <td>{appointment.service_name}</td>
                <td>{appointment.facility_name}</td>
                <td>{appointment.appointment_date}</td>
                <td>{appointment.appointment_time}</td>
                {/* <td>{appointment.notes}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
