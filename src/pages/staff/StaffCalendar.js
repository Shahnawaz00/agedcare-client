import React from 'react';
import '../../styles/StaffHub.css';
import StaffNavbar from '../../components/StaffNavbar';
import StaffCalendarSidebar from '../../components/StaffCalendarSidebar';

function StaffCalendar() {
    return (
      <div className="StaffHub">
        <StaffNavbar />
        <div className='staffhub-content' >
        <StaffCalendarSidebar />
            <h1 className='staffhub-heading' >Dayview Calendar</h1>
        </div>
      </div>
    );
  }
  
  export default StaffCalendar;