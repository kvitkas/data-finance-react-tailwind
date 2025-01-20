import React from "react";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <div className="bg-blue-500 p-6 text-white rounded-lg">
        <h2 className="text-2xl font-semibold">Optimal Sleep Schedule</h2>
        <p className="mt-4">Based on your flight, here’s the best sleep schedule.</p>
      </div>
      <div className="bg-blue-500 p-6 text-white rounded-lg">
        <h2 className="text-2xl font-semibold">Tips to Beat Jetlag</h2>
        <p className="mt-4">Sleep tips to follow before, during, and after your flight.</p>
      </div>
      <div className="bg-blue-500 p-6 text-white rounded-lg">
        <h2 className="text-2xl font-semibold">Track Your Progress</h2>
        <p className="mt-4">Keep track of your sleep patterns and jetlag recovery.</p>
      </div>
    </div>
  );
};

export default Cards;