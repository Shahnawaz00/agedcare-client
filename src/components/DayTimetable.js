import React from 'react';

const DayTimetable = () => {
  const renderTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 9; hour <= 17; hour++) {
      timeSlots.push(
        <div key={hour} className="time-slot">
          <span>{hour}:00</span>
        </div>
      );
    }
    return timeSlots;
  };

  return (
    <div className="day-timetable">
      <h2>Day Timetable</h2>
      <div className="time-slots">{renderTimeSlots()}</div>
    </div>
  );
};

export default DayTimetable;