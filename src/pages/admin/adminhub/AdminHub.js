import React from 'react';
import AdminNavbar from '../../../components/admin/AdminNavbar';
import AdminSidebar from '../../../components/admin/AdminManagementSidebar';


function AdminHub() {
    return (
      <div className="AdminHub">
        <AdminNavbar />
        <div className='adminhub-content' >
          <AdminSidebar />
            <h1 className='adminhub-heading' >Admin Hub</h1>
        </div>
      </div>
    );
  }
  
  export default AdminHub;