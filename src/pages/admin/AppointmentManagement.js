import React from 'react'
import AdminNavbar from '../../components/AdminNavbar';
import AdminSidebar from '../../components/AdminSidebar';
import { Link } from 'react-router-dom';

export default function AppointmentManagement() {
  return (
    <div>
        <AdminNavbar />
        <div className='adminhub-content' >
            <AdminSidebar />
            <div>
                <h1 className='adminhub-heading' >Appointment Management</h1>
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
        </div>
    </div>
  )
}
 