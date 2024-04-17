import React from 'react';
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
                                    <button>
                                            <a href="/admin">Admin Hub</a>
                                    </button>
                            </li>
                            <li>
                                    <button>
                                            <a href="/admin/calendar">Calendar</a>
                                    </button>
                            </li>
                            <li>
                                    <button>
                                            <a href="/admin/inventory">Inventory</a>
                                    </button>
                            </li>
                            <li>
                                    <button>
                                            <a href="/admin/patient-list">Patient List</a>
                                    </button>
                            </li>
                            <li>
                                    <button>
                                            <a href="/admin/service-list">Service List</a>
                                    </button>
                            </li>
                            <li>
                                    <button>
                                            <a href="/admin/staff-list">Staff List</a>
                                    </button>
                            </li>
                    </ul>
            </nav>

        </div>
    );
  }
  
  export default AdminNavbar;