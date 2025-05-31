import React from 'react';
import { motion } from 'framer-motion';

const EmploymentPage = () => {
  return (
    <div className="p-6 bg-gray-300 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6 mb-8"
      >
        <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">
          💼 Employment Opportunities & Job Melas
        </h1>

        {/* Narrative Section */}
        <section className="mb-10 text-gray-700 space-y-6 text-lg leading-relaxed">
          <p>
            The Ambica Foundation has <strong className="text-blue-700">organized over 16 Job Melas</strong>, focusing on bridging the gap between job seekers and employers, especially targeting rural and semi-urban populations.
          </p>

          <div className="flex justify-center">
            <img
              src="/images/Jobs1.png"
              alt="Job Mela overview"
              className="w-100 max-w-xl rounded-lg shadow-md"
            />
          </div>

          <p>
            Through strong <strong className="text-blue-700">corporate collaborations</strong> with financial institutions like{' '}
            <span className="font-semibold">ICICI Bank</span>, <span className="font-semibold">Axis Bank</span>, and{' '}
            <span className="font-semibold">Kotak Mahindra Bank</span>, the foundation offers significant career opportunities in banking and finance.
          </p>

          <div className="flex justify-center">
            <img
              src="/images/Jobs2.png"
              alt="Corporate Collaborations"
              className="w-100 max-w-xl rounded-lg shadow-md"
            />
          </div>

          <p>
            These efforts have <strong className="underline text-red-700 font-bold">secured nearly 1,650 jobs</strong> in the banking sector, contributing to the upliftment of youth and promoting economic growth.
          </p>

          <p>
            Additionally, over <strong className="underline text-red-700 font-bold">3,000 jobs</strong> have been created in
            various <span className="font-semibold">industrial sectors and educational institutions</span>, expanding career prospects beyond banking.
          </p>
        </section>

        {/* Job Fair Image */}
        <motion.div whileHover={{ scale: 1.02 }} className="mb-6 overflow-hidden rounded-lg shadow-md flex justify-center">
          <img
            src="/images/Jobs3.png"
            alt="Job Fair"
            className="w-100 max-w-3xl h-auto rounded-lg"
          />
        </motion.div>

        <h2 className="text-2xl font-semibold text-center text-primary mb-4">
          🎯 Job Mela Highlights
        </h2>

        {/* Highlights Section */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-gray-100 p-6 rounded-lg text-center max-w-3xl mx-auto space-y-4"
        >
          <p className="text-gray-800 font-medium">
            ✅ Conducted <span className="font-bold text-blue-800 underline">16+ Successful Job Fairs</span> across regions.
          </p>

          <p className="text-gray-800 font-medium">✅ Partnered with major banks:</p>
          <div className="flex justify-center items-center gap-4 mb-4 flex-wrap">
            <img src="https://logodix.com/logo/2206403.jpg" alt="ICICI Bank" className="h-10" />
            <img
              src="https://th.bing.com/th/id/OIP.xZGrCv5g_LD_1h6nL0-wyAHaD4?w=324&h=180&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3"
              alt="Axis Bank"
              className="h-14"
            />
            <img
              src="https://i1.wp.com/enalo.in/blog/wp-content/uploads/2021/08/99ec8bd35cc2f3f51356b602bfe95f10.jpg?w=760&ssl=1"
              alt="Kotak Bank"
              className="h-10"
            />
          </div>

          

          <p className="text-gray-800">
            Secured jobs for <span className="font-bold text-black underline">1650+ candidates</span> in the{' '}
            <span className="text-red-700 font-semibold">banking sector</span>.
          </p>

          <p className="text-gray-800 font-medium">
            ✅ Assured over <span className="font-bold text-black underline">3000+ jobs</span> in{' '}
            <span className="text-red-700 font-semibold">industrial sectors and institutions</span>.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EmploymentPage;
