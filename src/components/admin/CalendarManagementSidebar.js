import React from 'react'
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className='admin-hub-sidebar' >
                <Link to='/admin/calendar'>
                    <button>
                        Calendar
                    </button>
                </Link>
                <Link to='/admin/appointment-list'>
                    <button>
                        Appointment
                    </button>
                </Link>
                <Link to='/admin/create-appointment'>
                    <button>
                        Create Appointment
                    </button>
                </Link>
                <Link to='/admin/schedule-list'>
                    <button>
                        Schedule
                    </button>
                </Link>
                <Link to='/admin/create-schedule'>
                    <button>
                        Create Schedule
                    </button>
                </Link>
</div>
  )
}
