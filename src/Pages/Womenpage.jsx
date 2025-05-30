import React from 'react';
import { motion } from 'framer-motion';

const Womenpage = () => {
  return (
    <div className="p-6 bg-pink-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6 text-center"
      >
        <h1 className="text-3xl font-bold text-red-700 mb-4">👩‍🌾 Women Empowerment – Ambica Foundation</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Strong Women, Stronger Communities</h2>

        <p className="text-gray-800 text-left mb-4">
          At Ambica Foundation, we are committed to creating a world where every woman has the opportunity to thrive. Our Women Empowerment programs are designed to break social barriers, promote gender equality, and help women gain control over their lives — socially, economically, and emotionally.
        </p>
        <p className="text-gray-800 text-left mb-6">
          We believe that empowering women is not just a goal — it’s the foundation for sustainable development.
        </p>

        {/* Image 1 */}
        <div className="flex justify-center mb-6">
          <img
            src="/Images/Women1.png"
            alt="Women Skill Training"
            className="w-full max-w-xl rounded-lg shadow-md"
          />
        </div>

        <h3 className="text-2xl font-semibold text-blue-600 mb-4">🌟 Our Vision</h3>
        <p className="text-gray-800 text-left mb-6">
          To build a society where women are respected, educated, self-reliant, and actively contribute to the community’s growth and prosperity.
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mb-4">🔑 Key Focus Areas</h3>

        <div className="text-left text-gray-800 space-y-6">
          <div>
            <h4 className="font-bold text-lg text-blue-600">Skill Development & Livelihood Training</h4>
            <ul className="list-disc list-inside ml-4">
              <li>Tailoring, handicrafts, beauty services, and food processing.</li>
              <li>Creating self-help groups (SHGs) and women-led enterprises.</li>
              <li>Market linkages and digital literacy for rural women entrepreneurs.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-blue-600">Education & Awareness</h4>
            <ul className="list-disc list-inside ml-4">
              <li>Literacy programs for adult women in rural areas.</li>
              <li>Awareness workshops on legal rights, domestic violence, health, and hygiene.</li>
              <li>Support for girl child education, including scholarships and school kits.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-blue-600">Healthcare & Wellbeing</h4>
            <ul className="list-disc list-inside ml-4">
              <li>Health camps focused on maternal care, nutrition, and menstrual hygiene.</li>
              <li>Free sanitary napkin distribution and awareness drives.</li>
              <li>Counseling services for mental health and family support.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-blue-600">Financial Inclusion</h4>
            <ul className="list-disc list-inside ml-4">
              <li>Guidance on savings, banking, and access to microcredit.</li>
              <li>Training in financial literacy and self-management.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-blue-600">Leadership & Participation</h4>
            <ul className="list-disc list-inside ml-4">
              <li>Encouraging women's participation in local governance and decision-making.</li>
              <li>Mentorship and capacity-building for future women leaders.</li>
            </ul>
          </div>
        </div>

        {/* Image 2 */}
        <div className="flex justify-center mt-8">
          <img
            src="/Images/Women2.png"
            alt="Women Empowerment Campaign"
            className="w-full max-w-xl rounded-lg shadow-md"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Womenpage;
