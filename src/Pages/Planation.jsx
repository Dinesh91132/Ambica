import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/Images/Plantation1.png', alt: 'Volunteers planting trees' },
  { src: '/Images/Plantation2.png', alt: 'Young trees in a plantation drive' },
];

const Plantation = () => {
  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 text-gray-800"
      >
        <h1 className="text-3xl font-bold text-center text-red-700 mb-4">🌳 Tree Plantation Drive – Ambica Foundation</h1>
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-6">Greening Our Future, One Tree at a Time</h2>

        <p className="mb-4 text-lg">
          Ambica Foundation is actively engaged in tree plantation drives to combat climate change, improve air quality, and create greener, healthier communities. We encourage community participation to make a lasting environmental impact.
        </p>

        <h3 className="text-lg font-bold text-blue-700 mb-2">Our Goals</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Plant native trees in urban and rural areas</li>
          <li>Raise awareness about environmental conservation</li>
          <li>Promote sustainable living through community action</li>
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.2, duration: 0.5 }}
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

export default Plantation;
