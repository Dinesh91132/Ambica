import React from 'react';
import { motion } from 'framer-motion';

const MedicalAid = () => {
  const images = [
    { src: '/images/MedicalAid1.png', alt: 'Medical Camp 1' },
    { src: '/images/MedicalAid2.png', alt: 'Medical Camp 2' },
  ];

  return (
    <div className="py-10 bg-gray-100 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6 text-center mx-auto"
      >
        <h2 className="text-2xl font-bold text-red-700 mb-4">🏥 Medical Camps in Rural Areas</h2>
        <ul className="list-disc pl-5 text-gray-800 space-y-2 text-left mb-6">
          <li>Conducted in association with MS Ramaiah Hospital, Bangalore</li>
          <li>Provided free health checkups</li>
          <li>Distributed free prescribed medicines</li>
          <li>Health checkups including pediatric and geriatric care</li>
          <li>Helped in getting surgeries done free of cost</li>
          <li>Free eye checkups</li>
          <li>Donated free hearing aids</li>
          <li>Provided free inhalers/masks for asthma patients</li>
        </ul>

        {/* Side-by-Side Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map(({ src, alt }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.2, duration: 0.5 }}
              className="overflow-hidden rounded-xl shadow-md aspect-video"
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MedicalAid;
