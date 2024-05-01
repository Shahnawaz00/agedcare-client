import React from 'react';
import '../../styles/styles.css';
import StaffNavbar from '../../components/StaffNavbar';
import StaffSidebar from '../../components/StaffSidebar';

function StaffHub() {
    return (
      <div className="StaffHub">
        <StaffNavbar />
        <div className='staffhub-content' >
            <StaffSidebar />
            <h1 className='staffhub-heading' >Staff Hub</h1>
        </div>
      </div>
    );
  }
  
  export default StaffHub;