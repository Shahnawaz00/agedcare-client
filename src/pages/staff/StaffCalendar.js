import React from 'react';
import StaffNavbar from '../../components/staff/StaffNavbar';
import StaffCalendarSidebar from '../../components/staff/StaffCalendarSidebar';
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