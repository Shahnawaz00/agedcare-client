import React from 'react';
import '../../styles/styles.css';
import AdminNavbar from '../../components/admin/AdminNavbar';

function AdminHub() {
    return (
      <div className="AdminHub">
        <AdminNavbar />
        <div className='adminhub-content' >
            <h1 className='adminhub-heading' >Admin Hub</h1>
        </div>
      </div>
    );
  }
  
  export default AdminHub;