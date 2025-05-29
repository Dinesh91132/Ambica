import React from 'react';
import { motion } from 'framer-motion';

const SportsPage = () => {
  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 text-center"
      >
        <h1 className="text-3xl font-bold text-blue-700 mb-4">🏏 Sports Initiatives</h1>

        <div className="text-left text-gray-800 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-blue-600">Organized Volleyball & Cricket Tournaments</h2>
            <p>
              Held regular volleyball and cricket tournaments to promote physical activity and sports culture, particularly among youth in rural communities.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-600">Encouraged Rural Sports Talent</h2>
            <p>
              Focused on identifying and nurturing talent in rural areas by creating platforms where local players could compete and showcase their skills.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-600">Provided Free Cricket Kits</h2>
            <p>
              Distributed cricket kits (bats, balls, pads, helmets, etc.) free of cost to underprivileged and rural players to reduce the financial barrier to entry into the sport.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-600">Simhapuri Premier League – Hindupur</h2>
            <p>
              Recently organized the Simhapuri Premier League, an interstate cricket tournament held in Hindupur, bringing together teams from various regions to foster competitive spirit and provide exposure to rural players.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SportsPage;
