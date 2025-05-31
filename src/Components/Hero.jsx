import React, { useState, useEffect } from 'react';
const Hero = ({ scrollToSection }) => {
  return (
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
    </section>
  );
};
export default Hero