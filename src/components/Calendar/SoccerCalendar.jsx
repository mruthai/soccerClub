import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import './SoccerCalendar'; // Import the custom CSS file

const localizer = momentLocalizer(moment);

const SoccerCalendar = () => {
  const events = [
    {
      title: 'Game1',
      start: new Date(2023, 8, 2, 10, 0),
      end: new Date(2023, 8, 2, 12, 0),
    },
    {
      title: 'Event 2',
      start: new Date(2023, 8, 9, 8, 0),
      end: new Date(2023, 8, 9, 9, 0),
    },
  ];



  return (
    <div>
      <h1 className="headertext__playfair">Scheduling Calendar</h1>
      < Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        
        style={{ height: 500 }} // Set the height of the calendar
      />
    </div>
  );
};
export default SoccerCalendar



