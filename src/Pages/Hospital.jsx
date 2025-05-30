import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/images/Hospital1.png', alt: 'Medical team providing care' },
  { src: '/images/Hospital2.png', alt: 'Supplies being delivered to hospital' },
];

const Hospital = () => {
  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 text-gray-800"
      >
        <h1 className="text-3xl font-bold text-center text-red-700 mb-4">🏥 Hospital Support – Ambica Foundation</h1>
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-6">Supporting Healthcare Facilities for Better Patient Care</h2>

        <p className="mb-4 text-lg">
          Ambica Foundation partners with hospitals to provide critical medical equipment, supplies, and support services. Our goal is to enhance healthcare quality and accessibility for underprivileged patients.
        </p>

        <h3 className="text-lg font-bold text-blue-600 mb-2">Key Contributions</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Provision of essential medicines and consumables</li>
          <li>Donation of medical devices and diagnostic tools</li>
          <li>Training and support for healthcare staff</li>
        </ul>

        <h3 className="text-lg font-bold text-blue-600 mb-2">Impact on Communities</h3>
        <p className="mb-4">
          Our efforts ensure hospitals can deliver timely and effective treatment, reducing mortality rates and improving recovery times. We especially focus on rural and underserved areas where healthcare infrastructure is limited.
        </p>

        <h3 className="text-lg font-bold text-blue-600 mb-6">Get Involved</h3>
        <p>
          Support our mission by volunteering, donating supplies, or spreading awareness about the importance of strong healthcare systems.
        </p>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
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

export default Hospital;
