import React from 'react';
import { Outlet, Link } from "react-router-dom";

function StaffNavbar() {
    return (
        <div className="StaffNavbar">
            <div className='headings' >
                <h1>Aged Care</h1>
                <h3>User - Jim</h3>
                <button>
                    Logout
                </button>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to={'/staff'}>
                            <button>
                                Staff Hub
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/staff/staff-calendar">
                            <button>
                                Calendar
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/staff/staff-inventory">
                            <button>
                                Inventory
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/staff/staff-patient-list">
                            <button>
                                Patient List
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/staff/staff-service-list">
                            <button>
                                Service List
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
  }
  
  export default StaffNavbar;