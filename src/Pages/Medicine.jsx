import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/Images/Medicine1.png', alt: 'Volunteers distributing medicines' },
  { src: '/Images/Medicine2.png', alt: 'Senior citizens receiving free medicines' },
];

const MedicineDistribution = () => {
  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 text-gray-800"
      >
        <h1 className="text-3xl font-bold text-red-700 mb-4">💊 Medicine Distribution – Ambica Foundation</h1>
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-6">Providing Free Medicines to Those in Need</h2>

        <p className="text-lg mb-4">
          Ambica Foundation is committed to improving healthcare accessibility by distributing free medicines to senior citizens and underprivileged communities. This initiative helps ensure essential treatments reach those who might otherwise go without.
        </p>

        <h3 className="text-lg font-bold text-blue-700 mb-2">Our Objectives</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Provide timely and free access to essential medicines</li>
          <li>Support senior citizens with chronic conditions</li>
          <li>Reduce healthcare burdens in underprivileged areas</li>
        </ul>

        <h3 className="text-lg font-bold text-blue-700 mb-2">Community Impact</h3>
        <p className="mb-4">
          By distributing free medicines, we help improve quality of life, prevent complications, and reduce hospital visits for vulnerable populations.
        </p>

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

export default MedicineDistribution;
