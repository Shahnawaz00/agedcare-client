import React from 'react'
import AdminNavbar from '../../components/AdminNavbar';
import AdminSidebar from '../../components/AdminSidebar';
import { Link } from 'react-router-dom';
export default function ServiceManagement() {
  return (
    <div>
        <AdminNavbar />
        <div className='adminhub-content' >
            <AdminSidebar />
            <div>
                <h1 className='adminhub-heading' >Service Management</h1>
                <Link to='/admin/service-list'>
                    <button>
                        Service List
                    </button>
                </Link>
                <Link to='/admin/create-service'>
                    <button>
                        Create Service
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}
 