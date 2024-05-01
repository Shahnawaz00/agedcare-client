import React from 'react';
import '../../styles/styles.css';
import StaffNavbar from '../../components/StaffNavbar';
import StaffCalendarSidebar from '../../components/StaffCalendarSidebar';
import DayTimetable from '../../components/DayTimetable'; 

function StaffCalendar() {
    return (
      <div className="StaffHub">
        <StaffNavbar />
        <div className='staffhub-content' >
          <StaffCalendarSidebar />
          <h1 className='staffhub-heading'>Today's Timetable</h1>
          <DayTimetable /> 
        </div>
      </div>
    );
}

export default StaffCalendar;