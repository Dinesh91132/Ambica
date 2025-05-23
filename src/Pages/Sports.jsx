
import React from "react";
import { motion } from "framer-motion";
import { FaVolleyballBall, FaRunning, FaTrophy } from "react-icons/fa";

const Sports = () => {
  return (
    <div className="min-h-screen bg-gray-300 py-12 px-4">
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-center text-red-600">
          🏅 Sports Initiatives
        </h1>

        <p className="mb-6 text-center text-lg text-gray-900">
          We are committed to promoting rural sports and empowering young talent
          through various activities and support programs. Some of our key
          initiatives include:
        </p>

        <div className="space-y-5 text-gray-900 text-lg">
          <div className="flex items-start gap-3">
            <FaVolleyballBall className="text-blue-600 mt-1" size={22} />
            <span>
              Conducted <strong>Volleyball and Cricket tournaments</strong> to encourage sports culture in rural areas.
            </span>
          </div>

          <div className="flex items-start gap-3">
            
            <span>
             🏏 Provided <strong>free cricket kits</strong> to underprivileged players in rural regions to help them pursue their passion.
            </span>
          </div>

          <div className="flex items-start gap-3">
            <FaTrophy className="text-yellow-600 mt-1" size={22} />
            <span>
              Successfully organized the <strong>Simhapuri Premier League</strong> in Nellore, an inter-state cricket tournament showcasing regional talent.
            </span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl font-semibold text-gray-900">
            💪 Join us in building a strong sporting spirit and empowering rural athletes!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Sports;

