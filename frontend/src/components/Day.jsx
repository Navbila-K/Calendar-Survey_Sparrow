import React from 'react';


function Day({ day, currentDate, today, events }) {
  const isToday = day.isSame(today, 'day');
  const isCurrentMonth = day.isSame(currentDate, 'month');

  return (
    <div className={`border p-2 h-32 flex flex-col justify-between 
      ${isCurrentMonth ? 'bg-white' : 'bg-gray-200'} 
      ${isToday ? 'border-red-500' : ''}`}>
      
      <div className="text-right font-semibold">{day.date()}</div>

      <div className="flex flex-col gap-1">
        {events.map(event => (
          <div key={event.id} className="bg-green-300 text-xs p-1 rounded">
            {event.title}
          </div>
        ))}

        {events.length > 1 && (
          <div className="text-red-500 text-xs">Multiple Events!</div>
        )}
      </div>
    </div>
  );
}

export default Day;
