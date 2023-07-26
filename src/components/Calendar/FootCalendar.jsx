import React from 'react'
import Calendar from 'react-calendar'
import {useState} from 'react'
import 'react-calendar/dist/Calendar.css';
import './FootCalendar.css'
import { startOfWeek } from 'date-fns';

const FootCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const events = [
        {
            date: new Date(2023, 8, 2),
            title: 'Recreation Game 1',
        },
        {
            date: new Date(2023, 8, 9),
            title: 'Recreation Game 2',
        },
        {
            date: new Date(2023, 8, 16),
            title: 'Recreation Game 3',
        },
        {
            date: new Date(2023, 8, 23),
            title: 'Recreation Game 4',
        },
        {
            date: new Date(2023, 8, 30),
            title: 'Recreation Game 5',
        },
        {
            date: new Date(2023, 9, 7),
            title: 'Recreation Game 7',
        },
    ]

    const customValue = startOfWeek(selectedDate, { weekStartsOn: 0 });

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const getEventTitlesForDate = (date) => {
      return events
        .filter((event) => event.date.toDateString() === date.toDateString())
        .map((event) => event.title);
  
     
    };
    
      // Custom tile content renderer
      const tileContent = ({ date, view }) => {
        if (view === 'month') {
          const eventTitles = getEventTitlesForDate(date);
          return eventTitles.length > 0 ? <div className="event-tile-label">{eventTitles.join(', ')}
          </div> : null;
        } else {
          return null;
        }
      };

    const hasEvent = (date) => {
        return events.some((event) => event.date.toDateString() === date.toDateString());
      };

  return (
    <div>
        <h1>Rec Calendar</h1>
    <Calendar
      startAt="sunday"
      onChange={handleDateChange}
      value={selectedDate}
      tileContent={tileContent}
    
    />
    {/* <p>Selected Date: {selectedDate.toDateString()}</p> */}
    </div>
  )
}

export default FootCalendar