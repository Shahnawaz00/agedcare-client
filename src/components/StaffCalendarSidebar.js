import React from 'react'
import { Link } from "react-router-dom";
import StaffMonthCalendar from './StaffMonthCalendar';

export default function StaffCalendarSidebar() {
  return (
    <div className='staff-hub-sidebar' >
        <StaffMonthCalendar />
    <Link to="/staff/create-appointment">
        <button>Create Appointment</button>
    </Link>
    <Link to="/staff/staff-service-management">
        <button>Service Management</button>
    </Link>
</div>
  )
}
