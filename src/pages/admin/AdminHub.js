import React from 'react';
import '../../styles/styles.css';
import AdminNavbar from '../../components/AdminNavbar';
import AdminSidebar from '../../components/AdminSidebar';

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