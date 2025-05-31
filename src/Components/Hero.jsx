import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = ({ scrollToSection }) => {
  const [offset, setOffset] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const images = [
    { src: "./images/Hero1.png", alt: "Community Service" },
    { src: "./images/Hero2.png", alt: "Fans Distribution" },
    { src: "./images/Hero3.png", alt: "Education Initiative" },
    { src: "./images/Hero4.png", alt: "Independence Day Celebration" },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-8">
      {/* Background floating gradient bubbles */}
      <div className="absolute inset-0 z-0 bg-white" />
      <div className="absolute inset-0 bg-gradient-to-br  z-0" />

      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl opacity-20 animate-float-slow z-0"
          style={{
            width: `${50 + Math.random() * 80}px`,
            height: `${50 + Math.random() * 80}px`,
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            background: `radial-gradient(circle, rgba(200,200,255,0.4), rgba(255,255,255,0))`,
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-6 sm:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="order-2 lg:order-1 text-center lg:text-left space-y-6"
        >
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-3xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              AMBICA FOUNDATION
            </h1>
            <div className="mt-2 px-4 py-1 bg-gray-100 text-gray-700 text-sm rounded-full shadow">
              Celebrating Change Since 2009
            </div>
          </div>

          <h2 className="text-xl text-gray-700 font-light">
            Empowering communities through sustainable development
          </h2>

          <p className="text-gray-900 text-m max-w-xl mx-auto lg:mx-0">
            Established on Gandhi Jayanthi, the Ambica Foundation provides comprehensive support through healthcare, education, employment, and community development initiatives.
          </p>

          <p className="text-gray-800 text-m max-w-xl mx-auto lg:mx-0">
            In 2024, under the leadership of Ambica Moharana, the foundation launched an initiative to plant 5,000+ trees for a greener future.
          </p>

          <div className="flex gap-4 flex-wrap pt-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection('services')}
              className="px-4 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 shadow-xl transition-all"
            >
              Explore Our Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-3 rounded-full bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 shadow transition-all"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>

        {/* Image Grid Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="order-1 lg:order-2"
        >
          <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-lg"
                variants={imageVariants}
                whileHover={{ scale: 1.05, zIndex: 20 }}
                onClick={() => setSelectedImage(idx)}
                layoutId={`image-${idx}`}
              >
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4"
                >
                  <p className="text-white text-base font-medium">{img.alt}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              layoutId={`image-${selectedImage}`}
              className="relative w-full max-w-5xl aspect-[16/9] rounded-2xl overflow-hidden"
            >
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-white text-2xl font-semibold">
                  {images[selectedImage].alt}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
