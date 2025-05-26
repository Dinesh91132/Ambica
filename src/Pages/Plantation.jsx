import React from 'react';
import { motion } from 'framer-motion';

const bulletVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const Plantation = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center px-4 py-10">
      <motion.div
        className="w-full max-w-4xl bg-white rounded-xl p-6 shadow-lg text-center"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-red-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Plantation Drives by Ambica Foundation
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-2xl font-semibold text-blue-700 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          🌳 Green Initiative
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-gray-800 text-lg mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Ambica Foundation is committed to environmental conservation. Our plantation drives aim to restore green cover,
          reduce pollution, and promote a healthier ecosystem for future generations.
        </motion.p>

        {/* Bullet Points */}
        <motion.ul
          className="list-disc list-inside text-left text-gray-700 mx-auto max-w-2xl space-y-2"
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
            "Planted over 10,000 trees across rural and urban areas",
            "Engaged local communities and schools in awareness programs",
            "Focus on planting native and medicinal species",
            "Regular maintenance and survival tracking of saplings",
            "Organized plantation drives on World Environment Day & Earth Day",
          ].map((point, idx) => (
            <motion.li
              key={idx}
              className="font-normal"
              variants={bulletVariants}
            >
              {/* Bold specific text in first bullet */}
              {idx === 0 ? (
                <>
                  Planted over <strong>10,000 trees</strong> across rural and urban areas
                </>
              ) : (
                point
              )}
            </motion.li>
          ))}
        </motion.ul>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <motion.img
            src="/images/plantation1.png"
            alt="Tree plantation 1"
            className="rounded-lg shadow cursor-pointer"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9 }}
          />
          <motion.img
            src="/images/plantation2.png"
            alt="Tree plantation 2"
            className="rounded-lg shadow cursor-pointer"
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

export default Plantation;
