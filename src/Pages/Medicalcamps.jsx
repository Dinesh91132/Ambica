import React from 'react';

const Medicalcamps = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center px-4 py-10">
      {/* Content Box */}
      <div className="w-full max-w-3xl bg-white rounded-xl p-6 shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-700 mb-6 text-center">
          Medical Camps
        </h1>

        <h2 className="text-2xl font-semibold text-blue-700 mb-4">🏥 Medical Camps in Rural Areas</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2 text-left mx-auto max-w-xl mb-6">
          <li>Conducted in association with MS Ramaiah Hosp, Bangalore</li>
          <li>Provided free health checkups</li>
          <li>Distributed free prescribed medicines</li>
          <li>Health checkups including pediatric and geriatric care</li>
          <li>Helped in getting surgeries done free of cost</li>
          <li>Free eye checkups</li>
          <li>Donated free hearing aids</li>
          <li>Provided free inhalers and masks for asthma patients</li>
        </ul>

        {/* Ambica Foundation Info */}
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">🌿 Ambica Foundation’s Contribution</h2>
        <p className="text-gray-700 mb-4 max-w-xl mx-auto">
          Ambica Foundation has been instrumental in organizing and supporting medical camps in rural and underserved areas.
          The foundation focuses on preventive healthcare, awareness, and accessibility to essential medical services, uplifting thousands of lives across Andhra Pradesh.
        </p>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <img
            src="/images/medicalcamp1.png"
            alt="Medical Camp 1"
            className="rounded-lg shadow-md"
          />
          <img
            src="/images/medicalcamp2.png"
            alt="Medical Camp 2"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Medicalcamps;
