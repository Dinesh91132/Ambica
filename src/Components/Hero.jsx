import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-300 py-16 px-4">
      {/* Hero Banner */}
      <div className="bg-gray-900 text-white py-16 px-6 rounded-lg text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to Ambika Foundation</h1>
        <p className="text-lg mb-6">Empowering Lives, One Step at a Time</p>
        <button className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 transition duration-300">
          Get Involved
        </button>
      </div>

      {/* Mission Statement */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6">
          Empowering Lives. Igniting Hope.
        </h2>
        <p className="text-lg md:text-xl text-gray-900 leading-relaxed">
          At <span className="font-semibold text-blue-800">Ambika Foundation</span>, we stand as a beacon of compassion and action—transforming rural lives through education, healthcare, ambulance support, and women empowerment. We’re committed to building a brighter, healthier, and more equitable future for every underserved individual.
        </p>
      </div>

      {/* About Us Section */}
      <div className="max-w-5xl mx-auto mb-16 text-gray-800">
        <h3 className="text-2xl font-bold text-center text-blue-800 mb-6">About Ambika Foundation</h3>
        <p className="text-lg leading-relaxed text-center">
          Ambika Foundation is a non-profit organization rooted in compassion, dedicated to uplifting communities in rural and urban India. We run a wide range of initiatives aimed at social welfare including: medical camps, blood donation drives, sports promotion, educational support for underprivileged children, plantation drives, and employment assistance. With a team of selfless volunteers, we strive to create lasting impact and sustainable development in the regions we serve.
        </p>
      </div>

      {/* Services Showcase with Images */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <img src="/images/education.png" alt="Education" className="rounded-lg shadow-md w-full h-48 object-cover mb-4" />
          <h4 className="text-xl font-semibold text-blue-900">Education for All</h4>
        </div>
        <div>
          <img src="/images/health.png" alt="Healthcare" className="rounded-lg shadow-md w-full h-48 object-cover mb-4" />
          <h4 className="text-xl font-semibold text-blue-900">Free Healthcare Services</h4>
        </div>
        <div>
          <img src="/images/women.png" alt="Women Empowerment" className="rounded-lg shadow-md w-full h-48 object-cover mb-4" />
          <h4 className="text-xl font-semibold text-blue-900">Women Empowerment</h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;
