import React from 'react';
import '../../styles/styles.css';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminSidebar from '../../components/admin/CalendarManagementSidebar';


function AdminHub() {
    return (
      <div className="AdminHub">
        <AdminNavbar />
        <div className='adminhub-content' >
          <AdminSidebar />
            <h1 className='adminhub-heading' >Calendar</h1>
        </div>
      </div>
    );
  }
  
  export default AdminHub;