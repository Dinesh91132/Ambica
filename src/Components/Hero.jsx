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
    { src: "./images/Hero4.png", alt: "Independent day Celebration" },
  ];

  return (
 
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Circles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl opacity-20 animate-float-slow"
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
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="order-2 lg:order-1 text-center lg:text-left space-y-6"
        >
          {/* ✅ Centered Heading */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-3xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-center">
              AMBICA FOUNDATION
            </h1>
            <div className="mt-2 px-4 py-1 bg-gray-100 text-gray-700 text-sm rounded-full shadow text-center">
              Celebrating Change Since 2009
            </div>
          </div>

          <h2 className="text-xl sm:text-xl text-gray-700 font-light text-center lg:text-left">
            Empowering communities through sustainable development
          </h2>

          <p className="text-gray-900 text-m max-w-xl mx-auto lg:mx-0">
            Established on Gandhi Jayanthi, the Ambica Foundation provides comprehensive support through healthcare, education, employment, and community development initiatives.
          </p>

          <p className="text-gray-800 text-m max-w-xl mx-auto lg:mx-0">
            The Ambika Foundation has been actively engaged in environmental conservation through its plantation programs. In 2024, under the leadership of Ambika Moharana, the foundation launched an ambitious initiative aiming to plant over 5,000 trees to promote a greener future.
          </p>

          {/* ✅ Centered Buttons */}
          <div className="flex gap-4 flex-wrap pt-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection('services')}
              className="px-2 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 shadow-xl transition-all"
            >
              Explore Our Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-2 py-3 rounded-full bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 shadow transition-all"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>

        {/* Image Grid */}
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
        </motion.div
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-8">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-purple-100/40"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/60 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200/60 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-200/60 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
      <div className="absolute bottom-20 right-10 w-14 h-14 bg-yellow-200/60 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
      <div className="absolute center-40 right-20 w-12 h-12 bg-green-200/60 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
      <div className="absolute center-20 left-10 w-14 h-14 bg-red-200/60 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
      
      <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text mb-3 animate-fade-in-up py-0">
          AMBICA FOUNDATION
        </h1>
        <h2 className="text-3xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text mb-6 animate-fade-in-up py-5">
          Serving Communities
        </h2>
        <p className="text-3xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text mb-8 animate-fade-in-up" style={{animationDelay: '200ms'}}>
          Since 2009
        </p>
        <p className="text-xl md:text-xl text-gray-800 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '400ms'}}>
          Established on Gandhi Jayanthi, we provide comprehensive support through healthcare, education, employment, and community development initiatives.
          <br />
          
          <p className="text-xl md:text-1xl text-gray-800 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '500ms'}}>The Ambika Foundation has been actively engaged in environmental conservation through its plantation programs. In 2024, under the leadership of Ambika Moharana, the foundation launched an ambitious initiative aiming to plant over 5,000 trees to promote a greener future . This effort reflects their commitment to enhancing biodiversity and combating climate change.


One of the notable events was the Mega Tree Plantation Program organized by the Ambika Foundation Charitable Trust. This large-scale event focused on community involvement and environmental awareness, emphasizing the importance of tree planting in ecological restoration. A video documenting this program provides insights into the foundation's dedication to environmental causes.


</p>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '600ms'}}>
          <button 
            onClick={() => scrollToSection('services')}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Explore Our Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white/80 backdrop-blur-md text-gray-700 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/20"
          >
            Get In Touch
          </button>
        </div>

      </div>

      {/* Modal */}
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
