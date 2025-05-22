

import React, { useState } from 'react'

const About = () => {
  const [open, setOpen] = useState(false)

  const handleToggle = (e) => {
    e.preventDefault()
    setOpen((prev) => !prev)
  }

  return (
    <div className="p-6 md:p-10 bg-gray-300 min-h-screen flex flex-col justify-start items-center">
      {/* Anchor link that toggles visibility */}
      <a
        href="#about"
        onClick={handleToggle}
        className={`text-2xl font-semibold underline mb-6 transition-colors duration-300 ${
          open ? 'text-red-600 hover:text-red-800' : 'text-blue-600 hover:text-blue-800'
        }`}
      >
        About Us
      </a>

      {/* Conditionally render the About section with animation */}
      {open && (
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
                  "Ambika Foundation is leading the way in workplace safety across India's most dangerous industries. With a strong focus on zero injuries, we protect the hands that build our nation. Recognized globally, we are proud to set the good standard for safety."
              },
              {
                title: 'Our Business Policy',
                text:
                  'We provide skilled talent through expert recruitment. Our team specializes in sourcing, safety management, and strong client relationships. We hire both blue- and white-collar professionals to meet every industry need.'
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-gray-100 p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                <p className="text-gray-600 mt-2">{card.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

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
  )
}

export default About


