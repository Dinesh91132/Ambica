import React from 'react';
import { motion } from 'framer-motion';

const AmbulancePage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 text-center"
      >
        <h1 className="text-3xl font-bold text-red-700 mb-6">🚑 Ambulance Services</h1>

        {/* Image 1 */}
        <div className="flex justify-center mb-6">
          <img
            src="/Images/Ambulance1.png"
            alt="Ambulance on duty"
            className="w-full max-w-xl rounded-lg shadow-md"
          />
        </div>

        <div className="text-left text-gray-800 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-blue-700">📏 Total Distance Covered – 4,00,000 km</h2>
            <p>
              The ambulance service has covered approximately <strong>400,000 kilometers</strong>, offering uninterrupted emergency transportation across a wide region.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-700">🧑‍⚕️ Around 2,000 Emergency Cases Handled</h2>
            <p>
              Assisted in the transportation of about <strong>2,000 patients</strong>, including critical and non-critical cases.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-700">🛣️ Service Routes</h2>
            <p>
              Patients were transported to major hospitals in <strong>Bangalore</strong>, <strong>Anantapur</strong>, and <strong>Puttaparthi</strong>, ensuring they received advanced medical care in time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-700">🌟 Impact</h2>
            <p>
              These services significantly supported rural and underprivileged communities by providing <strong>timely and affordable emergency medical transportation</strong>, often saving lives in critical situations.
            </p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="flex justify-center mt-10">
          <img
            src="/Images/Ambulance2.png"
            alt="Patient transport"
            className="w-full max-w-xl rounded-lg shadow-md"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AmbulancePage;
