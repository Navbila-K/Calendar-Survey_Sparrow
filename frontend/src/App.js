import React from 'react';
import Calendar from './components/Calendar';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-5 text-center">Calendar App</h1>
      <Calendar />
    </div>
  );
}

export default App;
