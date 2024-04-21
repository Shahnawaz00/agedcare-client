import React from 'react';
import { Outlet, Link } from "react-router-dom";

function AdminNavbar() {
    return (
        <div className="AdminNavbar">
            <div className='headings' >
                <h1>Aged Care</h1>
                <h3>User - John</h3>
                <button>
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
                        <Link to="/admin/inventory-list">
                            <button>
                                Inventory
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/patient-list">
                            <button>
                                Patient List
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/service-list">
                            <button>
                                Service List
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/staff-list">
                            <button>
                                Staff List
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
  }
  
  export default AdminNavbar;