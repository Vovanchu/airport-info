import React from "react";

const Flights = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold">Розклад рейсів</h2>
    <p className="mt-2 text-gray-600">Онлайн-табло прильотів та відльотів.</p>
    <input 
      type="text" 
      placeholder="Пошук рейсу..." 
      className="mt-4 p-2 border rounded w-full"
    />
  </div>
);

export default Flights;