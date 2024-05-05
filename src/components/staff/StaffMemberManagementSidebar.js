import React from 'react'
import { Link } from "react-router-dom";

export default function StaffSidebar() {
  return (
    <div className='admin-hub-sidebar' >
                <Link to='/staff/staff-create-member'>
                    <button>
                        Create new member
                    </button>
                </Link>
</div>
  )
}
