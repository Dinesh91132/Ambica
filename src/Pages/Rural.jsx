import React from 'react';
import { motion } from 'framer-motion';

const Rural = () => {
  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 text-center"
      >
        <h1 className="text-3xl font-bold text-red-700 mb-4">🌾 Rural Development – Ambica Foundation</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Empowering Villages. Enabling Progress.</h2>

        <p className="text-gray-800 mb-4 text-left">
          At Ambica Foundation, we believe that the true strength of a nation lies in its villages.
          Our Rural Development initiatives are aimed at uplifting underdeveloped rural areas through sustainable,
          inclusive, and community-driven programs. By focusing on essential services, education, healthcare, and
          livelihood opportunities, we are working to bridge the urban-rural divide and foster self-reliant communities.
        </p>

        {/* Image 1 */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/Rural1.png"
            alt="Rural Development Activities"
            className="w-100 max-w-xl rounded-lg shadow-md"
          />
        </div>

        <h3 className="text-2xl font-semibold text-blue-600 mb-4">🎯 Our Objectives</h3>
        <ul className="list-disc list-inside text-left text-gray-800 space-y-2">
          <li>Improve the quality of life in rural communities.</li>
          <li>Ensure access to basic amenities like clean water, healthcare, and education.</li>
          <li>Promote sustainable agriculture and organic farming.</li>
          <li>Create employment opportunities and skill development programs.</li>
          <li>Support women empowerment and child welfare in rural settings.</li>
          <li>Foster a culture of self-help and local governance.</li>
        </ul>

        {/* Image 2 */}
        <div className="flex justify-center mt-8">
          <img
            src="/images/Rural2.png"
            alt="Village Empowerment Program"
            className="w-100 max-w-xl rounded-lg shadow-md"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Rural;
