import React from 'react'
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className='admin-hub-sidebar' >
    <Link to="/admin/member-management">
        <button>Member Management</button>
    </Link>
    <Link to="/admin/staff-management">
        <button>Staff Management</button>
    </Link>
    <Link to="/admin/service-management">
        <button>Service Management</button>
    </Link>
    <Link to="/admin/appointment-management">
        <button>Appointment Management</button>
    </Link>
</div>
  )
}
