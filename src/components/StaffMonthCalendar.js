import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const StaffMonthCalendar = () => {
  return (
    <div>
      <h1>Month Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Event 1', date: '2024-04-01' },
          { title: 'Event 2', date: '2024-04-02' },
        ]}
      />
    </div>
  );
};

export default StaffMonthCalendar;