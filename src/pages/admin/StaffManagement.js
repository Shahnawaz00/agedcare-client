import React from 'react'
import AdminNavbar from '../../components/AdminNavbar';
import AdminSidebar from '../../components/AdminSidebar';
import { Link } from 'react-router-dom';
export default function StaffManagement() {
  return (
    <div>
        <AdminNavbar />
        <div className='adminhub-content' >
            <AdminSidebar />
            <div>
                <h1 className='adminhub-heading' >Staff Management</h1>
                <Link to='/admin/staff-list'>
                    <button>
                        Staff List
                    </button>
                </Link>
                <Link to='/admin/create-staff'>
                    <button>
                        New Staff Member
                    </button>
                </Link>

            </div>
        </div>
    </div>
  )
}
 