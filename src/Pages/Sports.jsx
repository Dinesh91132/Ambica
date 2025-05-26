import React from "react";
import { motion } from "framer-motion";
import { FaVolleyballBall, FaTrophy } from "react-icons/fa";

const Sports = () => {
  return (
    <div className="min-h-screen bg-gray-300 py-12 px-4 flex items-center justify-center">
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold mb-4 text-center text-red-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          🏅 Sports Initiatives
        </motion.h1>

        {/* Intro paragraph */}
        <motion.p
          className="mb-6 text-center text-lg text-gray-900"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We are committed to promoting rural sports and empowering young talent
          through various activities and support programs. Some of our key
          initiatives include:
        </motion.p>

        {/* List of initiatives */}
        <motion.div
          className="space-y-5 text-gray-900 text-lg"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
            hidden: {},
          }}
        >
          {/* Item 1 */}
          <motion.div
            className="flex items-start gap-3"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <FaVolleyballBall className="text-blue-600 mt-1" size={22} />
            <span>
              Conducted <strong>Volleyball and Cricket tournaments</strong> to encourage sports culture in rural areas.
            </span>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            className="flex items-start gap-3"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* No icon here, so just space for alignment */}
            <div style={{ width: 22, marginTop: 4 }} />
            <span>
              🏏 Provided <strong>free cricket kits</strong> to underprivileged players in rural regions to help them pursue their passion.
            </span>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            className="flex items-start gap-3"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <FaTrophy className="text-yellow-600 mt-1" size={22} />
            <span>
              Successfully organized the <strong>Simhapuri Premier League</strong> in Nellore, an inter-state cricket tournament showcasing regional talent.
            </span>
          </motion.div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <p className="text-xl font-semibold text-gray-900">
            💪 Join us in building a strong sporting spirit and empowering rural athletes!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sports;
