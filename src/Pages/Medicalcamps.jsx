import React from 'react';
import { motion } from 'framer-motion';

const listItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const Medicalcamps = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center px-4 py-10">
      <motion.div
        className="w-full max-w-3xl bg-white rounded-xl p-6 shadow-lg text-center"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-red-700 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Medical Camps
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-2xl font-semibold text-blue-700 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          🏥 Medical Camps in Rural Areas
        </motion.h2>

        {/* Bullet points with stagger */}
        <motion.ul
          className="list-disc list-inside text-gray-800 space-y-2 text-left mx-auto max-w-xl mb-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
              },
            },
          }}
        >
          {[
            'Conducted in association with MS Ramaiah Hosp, Bangalore',
            'Provided free health checkups',
            'Distributed free prescribed medicines',
            'Health checkups including pediatric and geriatric care',
            'Helped in getting surgeries done free of cost',
            'Free eye checkups',
            'Donated free hearing aids',
            'Provided free inhalers and masks for asthma patients',
          ].map((point, idx) => (
            <motion.li key={idx} variants={listItemVariants}>
              {point}
            </motion.li>
          ))}
        </motion.ul>

        {/* Contribution Subtitle */}
        <motion.h2
          className="text-2xl font-semibold text-blue-700 mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          🌿 Ambica Foundation’s Contribution
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-gray-700 mb-4 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          Ambica Foundation has been instrumental in organizing and supporting medical camps in rural and underserved areas.
          The foundation focuses on preventive healthcare, awareness, and accessibility to essential medical services, uplifting thousands of lives across Andhra Pradesh.
        </motion.p>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <motion.img
            src="/images/medicalcamp1.png"
            alt="Medical Camp 1"
            className="rounded-lg shadow-md cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          />
          <motion.img
            src="/images/medicalcamp2.png"
            alt="Medical Camp 2"
            className="rounded-lg shadow-md cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Medicalcamps;
