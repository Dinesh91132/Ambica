import React from 'react';
import { motion } from 'framer-motion';

const scholarships = [
  {
    title: "Merit Scholarships",
    description:
      "Ambica Foundation is committed to providing merit scholarships to deserving students. These scholarships aim to support and encourage academic excellence, enabling students to pursue their educational goals without financial constraints.",
    image: "/images/edu2.png",
  },
  {
    title: "Scholarships for Poor Students",
    description:
      "We understand financial difficulties can hinder education. These scholarships ensure underprivileged students gain access to quality education and a chance at a better future.",
    image: "/images/edu3.png",
  },
  {
    title: "Scholarships for Students with Disabilities",
    description:
      "We empower students with disabilities by offering scholarships to help them overcome barriers and achieve academic success.",
    image: "/images/edu4.png",
  },
  {
    title: "Scholarships for Students from Rural Areas",
    description:
      "To bridge the educational gap, we provide resources and scholarships to uplift rural students and support their academic journey.",
    image: "/images/edu5.png",
  },
  {
    title: "Prathibha Award for Merit Students",
    description:
      "A prestigious award given to outstanding students demonstrating exceptional academic performance and excellence.",
    image: "/images/edu6.png",
  },
  {
    title: "Distributing Books & Dictionaries",
    description:
      "We regularly distribute essential learning materials like books and dictionaries to help students in need learn effectively.",
    image: "/images/edu7.png",
  },
];

const Education = () => {
  return (
    <div className="bg-gray-300 py-10 px-4">
      <motion.div
        className="bg-white rounded-2xl p-6 md:p-10 max-w-6xl mx-auto shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-center text-3xl font-bold mt-4 mb-8 text-red-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          EDUCATION
        </motion.h1>

        {/* Intro Section */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.img
            src="/images/edu1.png"
            alt="Education"
            className="w-full md:w-1/3 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
          <motion.p
            className="text-lg text-center md:text-left text-gray-700"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Education is the key to unlocking a brighter future. It empowers individuals with knowledge,
            skills, and critical thinking abilities. Through education, we break the cycle of poverty,
            promote equality, and foster innovation. Education creates a clear distinction between humans
            and other life forms, making man the most intelligent animal on the planet. It equips and
            prepares us to face life challenges more effectively. Education also enhances one’s skills,
            abilities, knowledge, attitude, and personality. Education emphasizes the importance of empathy
            and respect, as well as assisting people in understanding life trials and tribulations. An
            educated adult understands the importance of dedication, hard work, and making sacrifices to
            meet life deadlines.
          </motion.p>
        </motion.div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scholarships.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full flex items-center justify-center p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain w-full h-48"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
