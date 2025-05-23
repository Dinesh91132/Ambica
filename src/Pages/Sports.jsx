import React from "react";
import { motion } from "framer-motion";

const Sports = () => {
  return (
    <div className="min-h-screen bg-gray-300 py-12 px-4">
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, x: -100 }}   // start off 100px left and invisible
        animate={{ opacity: 1, x: 0 }}      // animate to visible and original position
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-900">
          Sports Initiatives
        </h1>

        <p className="text-lg mb-4 text-gray-700">
          We are committed to promoting rural sports and empowering young talent
          through various activities and support programs. Some of our key
          initiatives include:
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li>
            Conducted Volleyball and Cricket tournaments to encourage sports culture in rural areas.
          </li>
          <li>
            Provided free cricket kits to underprivileged players in rural regions to help them pursue their passion.
          </li>
          <li>
            Successfully organized the Simhapuri Premier League in Nellore, an inter-state cricket tournament showcasing regional talent.
          </li>
        </ul>

        <div className="mt-6 text-center">
          <p className="text-lg text-red-500 font-semibold">
            Join us in building a strong sporting spirit and empowering rural athletes!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Sports;
