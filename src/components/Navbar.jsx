import React, { useState } from 'react';
import Form from './Form';  // Import the Form component

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);  // State to toggle form visibility

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center max-w-[1240px] mx-auto text-white">
        <h1 className="text-3xl font-bold text-[#00df9a]">JETLAG</h1>
        <div className="space-x-6">
          {/* Home Button */}
          <button className="px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300">
            Home
          </button>

          {/* Fill Out Form Button */}
          <button
            onClick={toggleForm}
            className="px-6 py-3 text-white bg-green-600 rounded-full hover:bg-green-700 transition duration-300"
          >
            Fill out form
          </button>
        </div>
      </div>

      {/* Conditionally render the form */}
      {showForm && <Form />}
    </nav>
  );
};

export default Navbar;