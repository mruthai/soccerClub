import React from 'react'
import {useState} from 'react'
import DatePicker from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import'./SoccerCalendar.css'

const SoccerCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    return (
      <div>
        <h1>My Calendar</h1>
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          shouldHighlightWeekends // Add this prop to highlight weekends (optional)
          calendarClassName="custom-calendar" // Custom class for styling (optional)
          locale="en" // Set the locale (optional, default is "en")
          weekStartDay={0} // Set Sunday as the first day of the week (0 for Sunday, 1 for Monday, etc.)
        />
        {selectedDate && (
          <p>Selected Date: {selectedDate.day}/{selectedDate.month}/{selectedDate.year}</p>
        )}
      </div>
    );
  };

export default SoccerCalendar