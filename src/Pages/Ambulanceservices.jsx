import React from 'react';
import { motion } from 'framer-motion';

const bulletVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const Ambulanceservices = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center px-4 py-10">
      <motion.div
        className="w-full max-w-4xl bg-white rounded-xl p-6 shadow-lg"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-center text-red-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ambulance Services
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-2xl font-semibold text-blue-700 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          🚑 Emergency Medical Transport
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-700 mb-4 text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          The Ambica Foundation is proud to offer round-the-clock ambulance services to ensure timely medical help for people in need. Our ambulances are equipped with essential medical equipment and staffed by trained personnel to handle emergencies efficiently.
        </motion.p>

        {/* Statistics */}
        <motion.ul
          className="list-disc pl-5 text-gray-800 space-y-2 mb-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.25,
                delayChildren: 0.7,
              },
            },
          }}
        >
          {[
            <><span className="font-semibold text-red-600">Distance Covered:</span> Over 4,00,000 km</>,
            <><span className="font-semibold text-red-600">Cases Handled:</span> Around 2,000+</>,
            <><span className="font-semibold text-red-600">Service Areas:</span> Including Bangalore, Anantapur, and Puttaparthi hospitals</>,
            '24/7 availability and prompt response time',
            'Free ambulance service for underprivileged families',
          ].map((item, idx) => (
            <motion.li key={idx} variants={bulletVariants}>
              {item}
            </motion.li>
          ))}
        </motion.ul>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.img
            src="/images/Ambulance1.png"
            alt="Ambulance Service 1"
            className="rounded-lg shadow-md w-full h-64 object-cover cursor-pointer"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9 }}
          />
          <motion.img
            src="/images/Amabulance2.png"
            alt="Ambulance Service 2"
            className="rounded-lg shadow-md w-full h-64 object-cover cursor-pointer"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Ambulanceservices;
