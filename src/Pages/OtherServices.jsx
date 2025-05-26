import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  "Distributed blankets to poor & needy",
  "Conducted Sankranthi Muggula Potilu (Rangoli Competition) every year",
  "Donated sewing machines to unemployed women",
  "Donated street lights to villages",
  "Helped in borewell installation",
  "Provided financial assistance to poor students",
  "Served free food during COVID times",
  "Sent rice bags & wheat to Kerala during floods for relief"
];

// Variants for staggered list animation
const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const OtherServices = () => {
  return (
    <section className="bg-gray-300 py-10 px-4">
      <motion.div
        className="bg-white rounded-2xl p-6 md:p-10 max-w-6xl mx-auto shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-center text-3xl font-bold text-red-700 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Other Services
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Text List */}
          <motion.ul
            className="space-y-4 flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={listVariants}
          >
            {services.map((service, index) => (
              <motion.li
                key={index}
                className="flex items-start space-x-3 text-gray-700 text-lg"
                variants={itemVariants}
              >
                <CheckCircle className="text-green-600 mt-1" size={20} />
                <span>{service}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/others.png"
              alt="Community service activities"
              className="h-100 rounded-xl shadow-md"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default OtherServices;
