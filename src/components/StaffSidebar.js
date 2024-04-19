import React from 'react'
import { Link } from "react-router-dom";

export default function StaffSidebar() {
  return (
    <div className='staff-hub-sidebar' >
    <Link to="/staff/staff-member-management">
        <button>Member Management</button>
    </Link>
    <Link to="/staff/staff-service-management">
        <button>Service Management</button>
    </Link>
</div>
  )
}
