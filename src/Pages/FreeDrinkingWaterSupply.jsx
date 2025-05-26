import React from "react";
import { motion } from "framer-motion";

const FreeDrinkingWaterSupply = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center px-4 py-10">
      <motion.div
        className="p-6 max-w-5xl w-full bg-gray-100 text-gray-900 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-6 text-center text-red-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Free Drinking Water Supply
        </motion.h1>

        <p className="mb-4 text-lg text-gray-900">
          Ensuring access to safe and clean drinking water is one of our top priorities. Our team has actively worked to
          mitigate water scarcity and provide relief during the harsh summer seasons.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-base text-gray-900">
          <li>
            <strong className="text-gray-900">RO Water Points:</strong> Supplied Reverse Osmosis (RO) purified water in over
            30 locations across various neighborhoods to support healthy living.
          </li>
          <li>
            <strong className="text-gray-900">Summer Relief Tanks:</strong> Deployed clean drinking water tanks in water-scarce
            areas during peak summer to ensure no one goes without hydration.
          </li>
          <li>
            <strong className="text-gray-900">Community Awareness:</strong> Conducted awareness drives on the importance of
            water conservation and hygienic storage practices.
          </li>
          <li>
            <strong className="text-gray-900">24/7 Availability:</strong> Emergency water supply support is available for local
            events, public gatherings, and crisis situations.
          </li>
        </ul>

        <p className="mt-6 text-lg text-gray-900">
          We believe that access to drinking water is a basic human right, and we're committed to expanding this initiative
          further with community support.
        </p>
      </motion.div>
    </div>
  );
};

export default FreeDrinkingWaterSupply;
