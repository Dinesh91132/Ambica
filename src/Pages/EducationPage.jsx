import React from 'react';
import { motion } from 'framer-motion';

const EducationPage = () => {
  const images = {
    scholarships: '/images/Scholarships.png',
    studyMaterials: '/images/Dictionaries.png',
    textbooks: '/images/Books.png',
    awards: '/images/Prathiba.png',
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 text-center"
      >
        <h1 className="text-3xl font-bold text-red-700 mb-6">🎓 Education Initiatives</h1>

        <div className="text-left text-gray-800 space-y-10">

          {/* Merit-Based Scholarships */}
          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">📘 Merit-Based Scholarships</h2>
            <p>
              Awarded scholarships to academically talented students to support their higher education, especially for those from economically weaker backgrounds.
            </p>
            <div className="mt-4 flex justify-center">
              <img
                src={images.scholarships}
                alt="Merit-Based Scholarships"
                className="rounded-lg shadow-md object-cover max-h-64 w-auto"
              />
            </div>
          </div>

          {/* Distribution of Study Materials */}
          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">📚 Distribution of Study Materials</h2>
            <p>
              Supplied essential study materials including notebooks, pens, pencils, and stationery to students in government and rural schools to aid their learning.
            </p>
            <div className="mt-4 flex justify-center">
              <img
                src={images.studyMaterials}
                alt="Distribution of Study Materials"
                className="rounded-lg shadow-md object-cover max-h-64 w-auto"
              />
            </div>
          </div>

          {/* Textbooks and Dictionaries */}
          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">📖 Textbooks and Dictionaries</h2>
            <p>
              Provided textbooks aligned with the curriculum as well as English and bilingual dictionaries to improve language and comprehension skills.
            </p>
            <div className="mt-4 flex justify-center">
              <img
                src={images.textbooks}
                alt="Textbooks and Dictionaries"
                className="rounded-lg shadow-md object-cover max-h-64 w-auto"
              />
            </div>
          </div>

          {/* Prathibha Awards */}
          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">🏅 Prathibha Awards for Academic Excellence</h2>
            <p>
              Recognized and awarded students showing exceptional academic performance with Prathibha Awards to motivate them and set examples for others.
            </p>
            <img
              src={images.awards}
              alt="Prathibha Awards"
              className="mt-4 w-full rounded-lg shadow-md object-cover max-h-64"
            />
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default EducationPage;
