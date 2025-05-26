import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-300 py-16 px-4">
      {/* Hero Banner */}
      <div className="bg-gray-900 text-white py-16 px-6 rounded-lg text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fadeInUp">Welcome to Ambica Foundation</h1>
        <p className="text-lg mb-6 animate-fadeInUp delay-200">Empowering Lives, One Step at a Time</p>
        <button className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 transition duration-300 animate-fadeInUp delay-400">
          Get Involved 
        </button>
      </div>

      {/* Mission Statement */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 animate-fadeInUp">Empowering Lives. Igniting Hope.</h2>
        <p className="text-lg md:text-xl text-gray-900 leading-relaxed animate-fadeInUp delay-200">
          At <span className="font-semibold text-blue-900">Ambica Foundation</span>, we stand as a beacon of compassion and action—transforming rural lives through education, healthcare, ambulance support, and women empowerment. We’re committed to building a brighter, healthier, and more equitable future for every underserved individual.
        </p>
      </div>

      {/* About Us Section */}
      <div className="max-w-5xl mx-auto mb-16 text-gray-800">
        <h3 className="text-2xl font-bold text-center text-blue-900 mb-6 animate-fadeInUp">About Ambica Foundation</h3>
        <p className="text-lg leading-relaxed text-center animate-fadeInUp delay-200">
          Ambica Foundation is a non-profit organization rooted in compassion, dedicated to uplifting communities in rural and urban India. We run a wide range of initiatives aimed at social welfare including: medical camps, blood donation drives, sports promotion, educational support for underprivileged children, plantation drives, and employment assistance. With a team of selfless volunteers, we strive to create lasting impact and sustainable development in the regions we serve.
        </p>
      </div>

      {/* Services Showcase with Images and Animation */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          { src: "/images/education.png", label: "Education for All" },
          { src: "/images/health.png", label: "Free Healthcare Services" },
          { src: "/images/women.png", label: "Women Empowerment" },
          { src: "/images/Ambulance1.png", label: "24/7 Ambulance Services" },
          { src: "/images/bloodDonation1.png", label: "Blood Donation Camps" },
          { src: "/images/plantation2.png", label: "Tree Plantation Drives" }
        ].map((service, idx) => (
          <div
            key={idx}
            className="transform hover:scale-105 transition-transform duration-300 animate-fadeInUp"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <img
              src={service.src}
              alt={service.label}
              className="rounded-lg shadow-md w-full h-48 object-cover mb-4"
              loading="lazy"
            />
            <h4 className="text-xl font-semibold text-blue-900">{service.label}</h4>
          </div>
        ))}
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
          }

          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
        `}
      </style>
    </div>
  );
};

export default Hero;
