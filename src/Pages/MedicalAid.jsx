import React from 'react';
import { motion } from 'framer-motion';

const MedicalAid = () => {
  return (
    <div className="py-10">

      {/* Medical Camps */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 text-center mx-auto"
      >
        <h2 className="text-2xl font-semibold text-red-700 mb-4">🏥 Medical Camps in Rural Areas</h2>
        <ul className="list-disc pl-5 text-gray-800 space-y-2 inline-block text-left">
          <li>Conducted in association with MS Ramaiah Hosp, Bangalore</li>
          <li>Provided free health checkups</li>
          <li>Distributed free prescribed medicines</li>
          <li>Health checkups including pediatric, old age</li>
          <li>Helped in getting surgeries done free of cost</li>
          <li>Free eye checkups</li>
          <li>Donated free hearing aids</li>
          <li>Provided free inhalers/masks for asthma patients</li>
        </ul>
      </motion.div>

    </div>
  );
};

export default MedicalAid;
