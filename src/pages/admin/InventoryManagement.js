import React from 'react'
import AdminNavbar from '../../components/AdminNavbar';
import AdminSidebar from '../../components/AdminSidebar';
import { Link } from 'react-router-dom';
export default function InventoryManagement() {
  return (
    <div>
        <AdminNavbar />
        <div className='adminhub-content' >
            <AdminSidebar />
            <div>
                <h1 className='adminhub-heading' >Inventory Management</h1>
                <Link to='/admin/inventory-list'>
                    <button>
                        Inventory List
                    </button>
                </Link>
                <Link to='/admin/create-inventory'>
                    <button>
                        Create Inventory
                    </button>
                </Link>
                <Link to='/admin/create-medication'>
                    <button>
                        Create Medication
                    </button>
                </Link>
                <Link to='/admin/medication-list'>
                    <button>
                        Medication List
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}
 