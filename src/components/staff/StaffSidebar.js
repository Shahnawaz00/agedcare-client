import React from 'react'
import { Link } from "react-router-dom";

export default function StaffSidebar() {
  return (
    <div className='staff-hub-sidebar' >
    <Link to="/staff/staff-my-appointments">
        <button>My Appointments</button>
    </Link>
    <Link to="/staff/staff-my-details">
        <button>My Details</button>
    </Link>
</div>
  )
}
