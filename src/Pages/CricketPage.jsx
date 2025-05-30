import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/Images/Cricket1.png', alt: 'Young athlete receiving cricket kit' },
  { src: '/Images/Cricket2.png', alt: 'Group of kids playing cricket' },
];

const CricketKitDistribution = () => {
  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 text-gray-800"
      >
        <h1 className="text-3xl font-bold text-red-700 mb-4">🏏 Cricket Kit Distribution – Ambica Foundation</h1>
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-6">Empowering Young Athletes Through Sports</h2>

        <p className="text-lg mb-4">
          Ambica Foundation is dedicated to encouraging sports participation among youth by providing quality cricket equipment. Our cricket kit distribution drives help young athletes develop skills, confidence, and a passion for the game.
        </p>

        <p className="mb-4">
          By supporting grassroots sports, we aim to promote health, teamwork, and discipline, fostering the next generation of cricket players and leaders.
        </p>

        <h3 className="text-lg font-bold text-blue-700 mb-2">Our Mission</h3>
        <p className="mb-4">
          We believe sports play a vital role in youth development. Through cricket kit distribution, we remove barriers to entry by ensuring young athletes have access to essential gear including bats, balls, pads, gloves, and helmets.
        </p>

        <h3 className="text-lg font-bold text-blue-700 mb-2">Impact on Community</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Encourages regular physical activity and healthy lifestyles</li>
          <li>Builds confidence and teamwork skills</li>
          <li>Creates opportunities for young talents to be noticed and nurtured</li>
        </ul>

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

export default CricketKitDistribution;
