import React from 'react';

const About = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-300 min-h-screen flex flex-col justify-start items-center">
      
      {/* Centered Page Title */}
      <h1 className="text-5xl font-bold text-center text-red-600 mb-10">About</h1>

      <section
        id="about"
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-6xl animate-slideFadeIn"
      >
        {/* Table layout for text and image */}
        <table className="w-full mb-10">
          <tbody>
            <tr className="align-top">
              {/* Text section */}
              <td className="w-full md:w-1/2 pr-4 pb-6">
                <h2 className="text-4xl font-bold text-blue-900 pb-4 pt-2">Ambica Foundation</h2>
                <p className="text-lg text-gray-900 mb-6">
                  Ambica Foundation has traditionally provided staffing services. It is a prominent manpower recruiting firm that offers clients all over the world recruitment, staffing, HR outsourcing, and recruiters for hire. We offer complete recruiting services, from applicant search to appointment, mostly in Ghaziabad, Uttar Pradesh.
                </p>
                <p className="text-lg text-gray-900">
                  Ambica Foundation has assisted many organisations in areas such as construction, facility management, oil and gas, hospitality, security, manufacturing, hypermarkets, medical, and industries with countless customers and multiple trade testing and training facilities. We can effectively cater to recruiting and personnel demands from onshore to offshore sites thanks to automated operations managed by a competent team.
                </p>
              </td>

              {/* Image section */}
              <td className="w-full md:w-1/4 pl-4 pb-6">
                <img
                  src="/images/About.png"
                  alt="Ambica Foundation"
                  className="rounded-2xl shadow-lg object-cover w-half h-100"
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 tex-gray-900 gap-6">
          {[
            {
              title: 'Our Vision',
              text:
                "To become Asia's premier recruiting firm by deploying 1000+ individuals each month and growing at a rate of more than 30% per year. \"To empower communities through compassion, innovation, and sustainable development, fostering a world where every individual has the opportunity to thrive with dignity, knowledge, and purpose.\""
            },
            {
              title: 'Our Mission',
              text:
                'To enable every individual to live the life they want by equipping them with the required skills and a job that will help them flourish.'
            },
            {
              title: 'Our Values',
              text:
                'We guarantee that we will supply excellent prospects in any number. We hold chosen applicants accountable for arriving on time.'
            },
            {
              title: 'Our Focus',
              text:
                "Ambica Foundation is leading the way in workplace safety across India's most dangerous industries. With a strong focus on zero injuries, we protect the hands that build our nation. Recognized globally, we are proud to set the good standard for safety."
            },
            {
              title: 'Our Business Policy',
              text:
                'We provide skilled talent through expert recruitment. Our team specializes in sourcing, safety management, and strong client relationships. We hire both blue- and white-collar professionals to meet every industry need.'
            }
          ].map((card, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
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
