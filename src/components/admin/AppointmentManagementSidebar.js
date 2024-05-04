import React from 'react'
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className='admin-hub-sidebar' >
    <Link to='/admin/appointment-list'>
        <button>
            Appointment List
        </button>
    </Link>
    <Link to='/admin/create-appointment'>
        <button>
            Create Appointment
        </button>
    </Link>
</div>
  )
}
