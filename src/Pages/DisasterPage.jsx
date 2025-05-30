import React from 'react';
import { motion } from 'framer-motion';

const DisasterPage = () => {
  return (
    <div className="p-6 bg-red-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 text-center"
      >
        <h1 className="text-3xl font-bold text-red-700 mb-6">🚨 Disaster Relief – Ambica Foundation</h1>
        <p className="mb-6 text-gray-700 italic">
          Rapid Response. Long-Term Recovery. Human Dignity.
        </p>
        <p className="mb-6 text-gray-800">
          Natural and man-made disasters strike without warning, leaving communities devastated and vulnerable. At Ambica Foundation, we are committed to standing by those affected — offering not just immediate aid, but also long-term recovery and resilience-building support.
        </p>
        <p className="mb-6 text-gray-800">
          Our Disaster Relief initiatives are driven by compassion, coordination, and community strength — ensuring that no one is left behind in times of crisis.
        </p>

        {/* Image 1 */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/Disaster1.png"
            alt="Disaster Relief Team"
            className="w-full max-w-xl rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">🌪 What We Do</h2>

        <div className="text-left space-y-5 text-gray-800">
          <div>
            <h3 className="font-semibold text-blue-600 mb-1">Emergency Response & Relief</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Rapid deployment of volunteers and resources to affected areas.</li>
              <li>Distribution of emergency supplies: food packets, clean water, clothing, blankets, and hygiene kits.</li>
              <li>Medical aid including first aid, mobile health camps, and essential medicines.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-blue-600 mb-1">Shelter & Safety</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Temporary shelters for displaced families.</li>
              <li>Support for rebuilding homes and community infrastructure.</li>
              <li>Safe spaces for women, children, and the elderly during and after disaster events.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-blue-600 mb-1">Post-Disaster Rehabilitation</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Psychological support and trauma counseling.</li>
              <li>Assistance in restoring livelihoods: seeds, tools, livestock, and small grants.</li>
              <li>Education continuity for affected children (temporary classrooms, school supplies).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-blue-600 mb-1">Preparedness & Awareness</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Disaster preparedness workshops and simulations in vulnerable communities.</li>
              <li>Training local volunteers in first response and basic emergency skills.</li>
              <li>Promoting resilient infrastructure and sustainable practices to reduce future risk.</li>
            </ul>
          </div>
        </div>

        {/* Image 2 */}
        <div className="flex justify-center mt-10">
          <img
            src="/images/Disaster2.png"
            alt="Rehabilitation Work"
            className="w-100 max-w-xl rounded-lg shadow-md"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default DisasterPage;
