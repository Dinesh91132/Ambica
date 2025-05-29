import React from 'react';
import { motion } from 'framer-motion';

const EducationPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 text-center"
      >
        <h1 className="text-3xl font-bold text-red-600 mb-6">🎓 Education Initiatives</h1>

        <div className="text-left text-gray-800 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-blue-700">📘 Merit-Based Scholarships</h2>
            <p>
              Awarded scholarships to academically talented students to support their higher education, especially for those from economically weaker backgrounds.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-700">📚 Distribution of Study Materials</h2>
            <p>
              Supplied essential study materials including notebooks, pens, pencils, and stationery to students in government and rural schools to aid their learning.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-700">📖 Textbooks and Dictionaries</h2>
            <p>
              Provided textbooks aligned with the curriculum as well as English and bilingual dictionaries to improve language and comprehension skills.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-700">🏅 Prathibha Awards for Academic Excellence</h2>
            <p>
              Recognized and awarded students showing exceptional academic performance with Prathibha Awards to motivate them and set examples for others.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EducationPage;
