import React from 'react'
import Calendar from 'react-calendar'
import {useState} from 'react'
import 'react-calendar/dist/Calendar.css';
import './FootCalendar.css'


const FootCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const events = [
        {
            date: new Date(2023, 8, 2, 8, 0),
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
            title: 'Recreation Game 6',
        },
    ]

    

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

      // Function to render event titles and times for a given date
  const renderEventsForDate = (date) => {
    const eventInfo = events
      .filter((event) => event.date.toDateString() === date.toDateString())
      .map((event, index) => (
        <div key={index}>
          <p style={{color: 'black'}}>{event.title}</p>
          <p>{event.date.toLocaleDateString()} -{' '}
            {event.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          
          </p>
        </div>
      ));

    return eventInfo.length > 0 ? <div className="event-info">{eventInfo}</div> : null;
  };

  // Custom tile content renderer
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      return null;
    } else {
      return renderEventsForDate(date);
    }
  };


 

  return (
    <div>
        <h1>Rec Calendar</h1>
    <Calendar
      
      onChange={handleDateChange}
     
      value={selectedDate}
      tileContent={tileContent}
      
    />
    <p>Selected Date: {selectedDate.toDateString()}</p>
    </div>
  )
}

export default FootCalendar