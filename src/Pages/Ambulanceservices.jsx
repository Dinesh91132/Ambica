
import React from 'react';

const Ambulanceservices = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-800 mb-6">
        
      </h1>

      {/* Content Box */}
      <div className="w-full max-w-4xl bg-white rounded-xl p-6 shadow-lg">
        <h1 className="text-4xl font-bold  text-center text-red-700 mb-6">
        Ambulance Services
      </h1>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">🚑 Emergency Medical Transport</h2>
        
        {/* Description */}
        <p className="text-gray-700 mb-4 text-lg">
          The Ambica Foundation is proud to offer round-the-clock ambulance services to ensure timely medical help for people in need. Our ambulances are equipped with essential medical equipment and staffed by trained personnel to handle emergencies efficiently.
        </p>

        {/* Statistics */}
        <ul className="list-disc pl-5 text-gray-800 space-y-2 mb-6">
          <li><span className="font-semibold text-red-600">Distance Covered:</span> Over 4,00,000 km</li>
          <li><span className="font-semibold text-red-600">Cases Handled:</span> Around 2,000+</li>
          <li><span className="font-semibold text-red-600">Service Areas:</span> Including Bangalore, Anantapur, and Puttaparthi hospitals</li>
          <li>24/7 availability and prompt response time</li>
          <li>Free ambulance service for underprivileged families</li>
        </ul>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src="/images/Ambulance1.png"
            alt="Ambulance Service 1"
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
          <img
            src="/images/Amabulance2.png"
            alt="Ambulance Service 2"
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Ambulanceservices;

