import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/Images/WaterSupply1.png', alt: 'Clean water supply setup' },
  { src: '/Images/WaterSupply2.png', alt: 'Community accessing clean water' },
];

const WaterSupply = () => {
  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 text-gray-800"
      >
        <h1 className="text-3xl font-bold text-red-700 mb-4">💧 Clean Water Supply – Ambica Foundation</h1>
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-6">Ensuring Access to Safe and Clean Water</h2>

        <p className="mb-4 text-lg">
          Ambica Foundation is committed to improving health and hygiene by providing clean water supply systems to underserved communities. Access to safe water helps prevent waterborne diseases and enhances quality of life.
        </p>

        <h3 className="text-lg font-bold text-blue-600 mb-2">Our Initiatives</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Installation of water purification units</li>
          <li>Development of community wells and taps</li>
          <li>Awareness programs on water conservation and hygiene</li>
        </ul>

        <h3 className="text-lg font-bold text-blue-600 mb-2">Community Impact</h3>
        <p className="mb-4">
          Providing clean water has transformed the lives of thousands by reducing the prevalence of waterborne illnesses such as cholera and dysentery. Women and children especially benefit by saving hours previously spent collecting water, allowing more time for education and work.
        </p>

        <h3 className="text-lg font-bold text-blue-600 mb-2">Challenges We Address</h3>
        <p className="mb-4">
          Many rural and marginalized communities face a lack of infrastructure and resources for safe water access. Seasonal droughts, pollution, and poor sanitation often worsen the problem. Our projects are designed to overcome these challenges through sustainable solutions tailored to local needs.
        </p>

        <h3 className="text-lg font-bold text-blue-600 mb-6">Get Involved</h3>
        <p>
          Community participation is vital. We encourage locals to engage in maintaining water systems and spreading awareness about hygiene practices, ensuring long-term benefits and sustainability.
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

export default WaterSupply;
