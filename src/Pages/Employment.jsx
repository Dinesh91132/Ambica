import React from 'react';
import { motion } from 'framer-motion';

const Employment = () => {
  return (
    <div className="p-6 bg-gray-300 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6 mb-8"
      >
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          💼 Employment Opportunities
        </h1>
        <p className="text-gray-700 mb-4 text-lg">
          Explore various <span className="font-bold text-blue-700">Job Openings</span> and <span className="font-bold text-blue-700">Career Paths</span> in the <span className="underline text-red-700">Healthcare</span> and <span className="underline text-indigo-700">Industrial Sectors</span>.
        </p>

        {/* Job Fair Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="mb-6 overflow-hidden rounded-lg"
        >
          <img
            src="C:\\Users\\dines\\OneDrive\\Pictures\\Screenshots\\Screenshot 2025-05-23 150316.png"
            alt="Job Fair"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </motion.div>

        <h2 className="text-2xl font-semibold text-primary mt-6 mb-4">
          🎯 Job Mela Highlights
        </h2>

        {/* Unified Highlights Section */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-gray-100 p-6 rounded-lg"
        >
          <p className="text-gray-800 font-medium mb-4">
            ✅ Conducted <span className="font-bold text-blue-800 underline">16+ Successful Job Fairs</span> across regions.
          </p>

          <p className="text-gray-800 font-medium mb-2">
            ✅ Partnered with major banks:
          </p>
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <img src="https://logodix.com/logo/2206403.jpg" alt="ICICI Bank" className="h-10" />
            <img src="https://th.bing.com/th/id/OIP.xZGrCv5g_LD_1h6nL0-wyAHaD4?w=324&h=180&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3" alt="Axis Bank" className="h-14" />
            <img src="https://i1.wp.com/enalo.in/blog/wp-content/uploads/2021/08/99ec8bd35cc2f3f51356b602bfe95f10.jpg?w=760&ssl=1" alt="Kotak Bank" className="h-10" />
          </div>
          <p className="text-gray-800 mb-4">
            Secured jobs for <span className="font-bold text-black underline">1650+ candidates</span> in the <span className="text-red-700 font-semibold">banking sector</span>.
          </p>

          <p className="text-gray-800 font-medium">
            ✅ Assured over <span className="font-bold text-black underline">3000+ jobs</span> in various <span className="text-red-700 font-semibold">industrial sectors and institutions</span>.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Employment;
