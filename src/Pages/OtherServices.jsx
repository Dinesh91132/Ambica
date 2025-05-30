import React from 'react';
import { motion } from 'framer-motion';

const OtherServices = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-red-700 mb-8"
        >
          🎁 Other Social Initiatives
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="list-disc list-inside text-gray-700 text-lg space-y-4 mb-12"
        >
          <li>
            <strong>Distribution of Blankets:</strong> Provided blankets to the poor and needy during cold seasons.
          </li>
          <li>
            <strong>Cultural Engagement:</strong> Conducted Sankranti Muggula Poti (Rangoli Competition) annually to encourage cultural participation and creativity.
          </li>
          <li>
            <strong>Women Empowerment:</strong> Donated sewing machines to unemployed women to support self-employment and livelihood generation.
          </li>
          <li>
            <strong>Rural Development:</strong> Donated street lights to various villages, improving safety and infrastructure.
          </li>
          <li>
            <strong>Water Access Improvement:</strong> Assisted in the installation of borewells to help provide drinking water in underserved areas.
          </li>
          <li>
            <strong>Educational Support:</strong> Offered financial assistance to poor students, ensuring continued access to education.
          </li>
          <li>
            <strong>COVID-19 Relief:</strong> Served free food during COVID times at government hospitals to patients and their families.
          </li>
          <li>
            <strong>Disaster Relief for Kerala Floods:</strong> Sent rice bags and wheat to Kerala as part of flood relief efforts.
          </li>
        </motion.ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { src: "./Images/OtherServices1.png", alt: "Blanket Distribution" },
            { src: "./Images/OtherServices2.png", alt: "Cultural Engagement" },
            { src: "./Images/OtherServices3.png", alt: "Women Empowerment" },
            { src: "./Images/OtherServices4.png", alt: "Rural Development" },
            { src: "./Images/OtherServices5.png", alt: "Water Access" },
            { src: "./Images/OtherServices6.png", alt: "COVID Relief" },
          ].map((img, index) => (
            <motion.img
              key={index}
              src={img.src}
              alt={img.alt}
              className="rounded-lg shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
