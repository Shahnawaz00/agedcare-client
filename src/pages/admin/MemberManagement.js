import React from 'react'
import AdminNavbar from '../../components/AdminNavbar';
import AdminSidebar from '../../components/AdminSidebar';
import { Link } from 'react-router-dom';
export default function MemberManagement() {
  return (
    <div>
        <AdminNavbar />
        <div className='adminhub-content' >
            <AdminSidebar />
            <div>
                <h1 className='adminhub-heading' >Member Management</h1>
                <Link to='/admin/create-member'>
                    <button>
                        Create new member
                    </button>
                </Link>

            </div>
        </div>
    </div>
  )
}
 