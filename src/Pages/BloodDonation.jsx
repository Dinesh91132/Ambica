import React from 'react';
import { motion } from "framer-motion";
import { FaTint } from "react-icons/fa";

const BloodDonation = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Title with icon */}
        <motion.h1
          className="text-4xl font-bold text-center text-red-700 mb-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <FaTint /> Blood Donation
        </motion.h1>

        {/* Introduction paragraph */}
        <motion.p
          className="text-gray-700 text-lg mb-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          At <span className="font-semibold text-blue-900">Ambica Foundation</span>, we believe in the power of giving. Blood donation is a simple yet powerful act that saves lives every day.
        </motion.p>

        {/* Image Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <img
            src="/images/bloodDonation1.png"
            alt="Volunteers donating blood"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
          <img
            src="/images/bloodDonation2.png"
            alt="Ambica Foundation blood donation camp"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </motion.div>

        {/* What We Do Section */}
        <motion.h2
          className="text-2xl font-semibold text-blue-900 mb-2"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Our Blood Donation Initiatives
        </motion.h2>

        <motion.ul
          className="list-disc list-inside text-gray-700 text-lg mb-6 space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <li>We organize regular blood donation camps in rural and urban areas.</li>
          <li>We collaborate with local hospitals and blood banks to ensure safe and efficient donation processes.</li>
          <li>We spread awareness about the importance of regular voluntary blood donation.</li>
          <li>Our volunteers help donors before, during, and after the donation process.</li>
        </motion.ul>

        {/* Call to Action */}
        <motion.div
          className="bg-red-100 border-l-4 border-red-500 p-4 rounded-lg text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <p className="text-red-700 font-semibold text-lg mb-2">
            Want to make a difference? Join our next blood donation drive and be a hero to someone in need.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Join Now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BloodDonation;
