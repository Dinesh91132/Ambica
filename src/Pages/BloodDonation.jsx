import React from 'react';
import { motion } from 'framer-motion';

const BloodDonation = () => {
  const images = [
    { src: '/images/BloodDonation1.png', alt: 'Blood Donation Camp 1' },
    { src: '/images/BloodDonation2.png', alt: 'Blood Donation Camp 2' },
  ];

  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 text-gray-800"
      >
        <h1 className="text-3xl font-bold text-red-700 mb-4">🩸 Blood Donation Camps – Ambica Foundation</h1>
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">Saving Lives, One Drop at a Time</h2>

        <p className="mb-4">
          At Ambica Foundation Trust, we believe in the power of community and compassion. Our blood donation camps are a core part of our mission to support healthcare services and save lives across India.
        </p>

        <h3 className="text-lg font-semibold text-blue-600 mb-2">Regular Camps</h3>
        <p className="mb-4">
          We organize frequent blood donation drives in collaboration with leading hospitals and local organizations. Our camps are safe, well-organized, and welcoming for first-time and regular donors alike.
        </p>

        <h3 className="text-lg font-semibold text-blue-600 mb-2">🎉 Mega Blood Donation Camp</h3>
        <ul className="list-disc list-inside mb-4">
          <li>📍 Held on May 1st every year</li>
          <li>🎉 In honor of our founder, Dr. Ambika Moharana</li>
          <li>🩸 Hundreds of units collected to support patients in need</li>
        </ul>

        <h3 className="text-lg font-semibold text-blue-600 mb-2">❤ Why Donate Blood?</h3>
        <ul className="list-disc list-inside mb-6">
          <li>One unit of blood can save up to three lives</li>
          <li>Safe, quick, and rewarding experience</li>
          <li>Helps hospitals maintain emergency supplies</li>
        </ul>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-[4/3] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BloodDonation;
