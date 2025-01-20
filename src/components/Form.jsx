import React, { useState } from 'react';

const Form = () => {
  const [sleepSchedule, setSleepSchedule] = useState('');
  const [flightTime, setFlightTime] = useState('');
  const [flightNumber, setFlightNumber] = useState('');  // State for flight number

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can add logic to process the input data)
    console.log(`Sleep schedule: ${sleepSchedule}`);
    console.log(`Flight time: ${flightTime}`);
    console.log(`Flight number: ${flightNumber}`);
    alert('Form submitted!');  // For demonstration purposes
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-[600px] mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Fill Out Your Flight & Sleep Schedule</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="sleepSchedule" className="block text-xl mb-2">
            When do you normally go to bed?
          </label>
          <input
            type="text"
            id="sleepSchedule"
            className="w-full p-2 border border-gray-300 rounded"
            value={sleepSchedule}
            onChange={(e) => setSleepSchedule(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="flightTime" className="block text-xl mb-2">
            What time is your flight?
          </label>
          <input
            type="time"
            id="flightTime"
            className="w-full p-2 border border-gray-300 rounded"
            value={flightTime}
            onChange={(e) => setFlightTime(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="flightNumber" className="block text-xl mb-2">
            What is your flight number?
          </label>
          <input
            type="text"
            id="flightNumber"
            className="w-full p-2 border border-gray-300 rounded"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;