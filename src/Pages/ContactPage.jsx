import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Header */}
      <motion.div
        className="page-header"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text mb-0 py-1 text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to learn more about our work or to get involved.
          </p>
        </div>
      </motion.div>

      {/* Main Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
            <div className="space-y-6">
              {[
                {
                  icon: '📍',
                  title: 'Address',
                  lines: ['123 Community Center Road,Hindupur,Andhra Pradesh,515201 India'],
                },
                {
                  icon: '📞',
                  title: 'Phone',
                  lines: ['+91 98765 43210'],
                },
                {
                  icon: '✉️',
                  title: 'Email',
                  lines: ['info@ambicafoundation.org'],
                },
              ].map((info, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start space-x-4"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={idx + 2}
                >
                  <div className="w-6 h-6 text-blue-600 mt-1">{info.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{info.title}</h3>
                    <p className="text-gray-600">{info.lines.join('<br/>')}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-lg p-8 shadow-lg"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <div className="space-y-6">
              {['Name', 'Email'].map((label, i) => (
                <motion.div
                  key={label}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={i + 3}
                >
                  <label className="block text-gray-700 font-medium mb-2">{label}</label>
                  <input
                    type={label === 'Email' ? 'email' : 'text'}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder={`Your ${label.toLowerCase()}`}
                  />
                </motion.div>
              ))}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={5}
              >
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
                  placeholder="How can we help you?"
                />
              </motion.div>
              <motion.button
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={6}
              >
                Send Message
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
