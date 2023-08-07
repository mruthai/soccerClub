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
      start: new Date(2023, 8, 25, 14, 30),
      end: new Date(2023, 8, 25, 16, 0),
    },
  ];

  // const handleSelect = ({ start, end }) => {
  //   const title = window.prompt('Enter event title:');
  //   if (title) {
  //     setEvents([...events, { title, start, end }]);
  //   }
  // };

  return (
    <div>
      <h1>Scheduling Calendar</h1>
      < Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        // onSelectSlot={handleSelect}
        style={{ height: 500 }} // Set the height of the calendar
      />
    </div>
  );
};
export default SoccerCalendar



