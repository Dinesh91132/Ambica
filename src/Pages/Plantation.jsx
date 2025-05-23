import React from 'react';

const Plantation = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center px-4 py-10">
      {/* Title */}
     

      {/* Content Box */}
      <div className="w-full max-w-4xl bg-white rounded-xl p-6 shadow-lg text-center">
         <h1 className="text-4xl font-bold text-red-700 mb-6 text-center">
        Plantation Drives by Ambica Foundation
      </h1>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">🌳 Green Initiative</h2>

        <p className="text-gray-800 text-lg mb-4">
          Ambica Foundation is committed to environmental conservation. Our plantation drives aim to restore green cover,
          reduce pollution, and promote a healthier ecosystem for future generations.
        </p>

        <ul className="list-disc list-inside text-left text-gray-700 mx-auto max-w-2xl space-y-2">
          <li>Planted over <strong>10,000 trees</strong> across rural and urban areas</li>
          <li>Engaged local communities and schools in awareness programs</li>
          <li>Focus on planting native and medicinal species</li>
          <li>Regular maintenance and survival tracking of saplings</li>
          <li>Organized plantation drives on World Environment Day & Earth Day</li>
        </ul>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <img
            src="/images/plantation1.png"
            alt="Tree plantation 1"
            className="rounded-lg shadow"
          />
          <img
            src="/images/plantation2.png"
            alt="Tree plantation 2"
            className="rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Plantation;
