import React from 'react';
import dayjs from 'dayjs';

function Header({ currentDate, setCurrentDate }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <button 
        className="bg-blue-500 text-white py-1 px-3 rounded"
        onClick={() => setCurrentDate(currentDate.subtract(1, 'month'))}>
        Prev
      </button>

      <h2 className="text-xl font-semibold">{currentDate.format('MMMM YYYY')}</h2>

      <button 
        className="bg-blue-500 text-white py-1 px-3 rounded"
        onClick={() => setCurrentDate(currentDate.add(1, 'month'))}>
        Next
      </button>
    </div>
  );
}

export default Header;
