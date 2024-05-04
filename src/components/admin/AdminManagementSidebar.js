import React from 'react'
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className='admin-hub-sidebar' >
    <Link to='/admin/admin-list'>
                    <button>
                        Admin List
                    </button>
                </Link>
                <Link to='/admin/create-admin'>
                    <button>
                        New Admin
                    </button>
                </Link>
</div>
  )
}
