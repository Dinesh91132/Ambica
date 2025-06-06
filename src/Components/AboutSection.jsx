import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut'
      }
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut'
      }
    }),
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          About Us
        </motion.h2>

        {/* Text and Image Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex-1 text-left">
            {[
              "Founded on Gandhi Jayanthi (October 2nd, 2009), Ambica Foundation has been a pillar of support and service, transforming lives across the Hindupur Constituency for more than 15 years.",
              "Guided by the values of Mahatma Gandhi, our mission is to uplift communities through selfless service and transformative action. We focus on sustainable progress by empowering people with education, quality healthcare, job opportunities, and rural development.",
              "Ambica Foundation has traditionally provided staffing services. the foundation plays a vital role in providing employment across various sectors.  foundation focuses on empowering underprivileged populations through a variety of humanitarian and developmental initiatives.",
              "Ambica Foundation has assisted many organisations in areas such as construction, facility management, oil and gas, hospitality, security, manufacturing, hypermarkets, medical, and industries with countless customers and multiple trade testing and training facilities. We can effectively cater to recruiting and personnel demands from onshore to offshore sites thanks to automated operations managed by a competent team."
            ].map((text, idx) => (
              <motion.p
                key={idx}
                className="text-md md:text-l text-gray-700 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          <motion.div
            className="flex-1 max-w-md"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="./images/About.png"
              alt="Ambica Foundation"
              loading="lazy"
              className="rounded-2xl shadow-lg object-cover w-85 h-auto"
            />
          </motion.div>
        </motion.div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            {
              title: 'Our Vision',
              text: "To become Asia's premier recruiting firm by deploying 1000+ individuals each month and growing at a rate of more than 30% per year. To empower communities through compassion, innovation, and sustainable development, fostering a world where every individual has the opportunity to thrive with dignity, knowledge, and purpose."
            },
            {
              title: 'Our Mission',
              text: 'To enable every individual to live the life they want by equipping them with the required skills and a job that will help them flourish.'
            },
            {
              title: 'Our Values',
              text: 'We guarantee that we will supply excellent prospects in any number. We hold chosen applicants accountable for arriving on time.'
            },
            {
              title: 'Our Focus',
              text: "Ambica Foundation is leading the way in workplace safety across India's most dangerous industries. With a strong focus on zero injuries, we protect the hands that build our nation. Recognized globally, we are proud to set the good standard for safety."
            },
            {
              title: 'Our Business Policy',
              text: 'We provide skilled talent through expert recruitment. Our team specializes in sourcing, safety management, and strong client relationships. We hire both blue- and white-collar professionals to meet every industry need.'
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border-t-4 border-blue-600"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-700">{card.title}</h3>
              <p className="text-gray-700 mt-2">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
