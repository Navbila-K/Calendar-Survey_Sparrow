import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Header from './Header';
import Day from './Day';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/events.json')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  const startDay = currentDate.startOf('month').startOf('week');
  const endDay = currentDate.endOf('month').endOf('week');
  let date = startDay.clone().subtract(1, 'day');  // ✅ Use let here
  const calendar = [];

  while (date.isBefore(endDay, 'day')) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      date = date.add(1, 'day');
      week.push(date.clone());
    }
    calendar.push(week);
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Header currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
          <div key={d} className="text-center font-bold">{d}</div>
        ))}
        {calendar.flat().map((day, idx) => (
          <Day 
            key={idx} 
            day={day} 
            currentDate={currentDate} 
            today={dayjs()} 
            events={events.filter(e => e.date === day.format('YYYY-MM-DD'))} 
          />
        ))}
      </div>
    </div>
  );
}

export default Calendar;
