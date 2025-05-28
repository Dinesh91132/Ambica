import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text animate-fade-in-up">
          About Us
        </h2>
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-lg">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Founded on Gandhi Jayanthi (October 2nd, 2009), Ambica Foundation has been a beacon of hope and service in the Hindapur Constituency for over 15 years.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Our mission is rooted in the principles of selfless service and community development, following the ideals of Mahatma Gandhi. We believe in creating sustainable change through education, healthcare, employment opportunities, and rural development initiatives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection