import React from 'react';

const About = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-300 min-h-screen flex flex-col justify-start items-center">
      {/* Added About Us title */}
      <h1 className="text-5xl font-bold text-blue-900 mb-10">About Us</h1>

      {/* About section directly rendered */}
      <section
        id="about"
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-6xl animate-slideFadeIn"
      >
        {/* Flex container for text and image */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
          {/* Text section */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-blue-900 pb-4 pt-2">Ambika Foundation</h2>
            <p className="text-lg text-gray-700 mb-6">
              Ambika Foundation has traditionally provided staffing services. It is a prominent manpower recruiting firm that offers clients all over the world recruitment, staffing, HR outsourcing, and recruiters for hire. We offer complete recruiting services, from applicant search to appointment, mostly in Ghaziabad, Uttar Pradesh.
            </p>
            <p className="text-lg text-gray-700">
              Ambika Foundation has assisted many organisations in areas such as construction, facility management, oil and gas, hospitality, security, manufacturing, hypermarkets, medical, and industries with countless customers and multiple trade testing and training facilities. We can effectively cater to recruiting and personnel demands from onshore to offshore sites thanks to automated operations managed by a competent team.
            </p>
          </div>

          {/* Image section */}
          <div className="flex-1 max-w-md">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
              alt="Ambika Foundation"
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[ /* your cards data */ ].map((card, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
              <p className="text-gray-600 mt-2">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Slide-Fade Animation */}
      <style>
        {`
          @keyframes slideFadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-slideFadeIn {
            animation: slideFadeIn 0.6s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default About;
