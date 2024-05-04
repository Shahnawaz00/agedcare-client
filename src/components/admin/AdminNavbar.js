import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';

function AdminNavbar() {
    const { logout, user } = useAuth();
    const handleLogout = () => {
        logout();
    }
    return (
        <div className="AdminNavbar">
            <div className='headings' >
                <h1>Aged Care</h1>
                <h3>User - {user.name}</h3>
                <button onClick={handleLogout} >
                    Logout
                </button>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to={'/admin'}>
                            <button>
                                Admin Hub
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/calendar">
                            <button>
                                Calendar
                            </button>
                        </Link>
                    </li>   
                    <li>
                        <Link to="/admin/appointment-management">
                            <button>
                                Appointment Management
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/staff-management">
                            <button>
                                Staff Management
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/facility-management">
                            <button>
                                Facility Management
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/service-management">
                            <button>
                                Service Management
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/inventory-management">
                            <button>
                                Inventory Management
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
  }
  
  export default AdminNavbar;