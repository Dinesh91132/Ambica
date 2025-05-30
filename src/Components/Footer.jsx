import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4">About Ambica Foundation</h3>
            <p className="text-blue-100 leading-relaxed">
              Established on 2nd October 2009 (Gandhi Jayanthi), serving the people of Hindupur Constituency with dedication and compassion.
            </p>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '200ms'}}>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-blue-100 leading-relaxed">
              To provide comprehensive support through healthcare, education, employment opportunities, and community development initiatives.
            </p>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '400ms'}}>
            <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
            <p className="text-blue-100 leading-relaxed">
              Serving Hindupur Constituency<br />
              India<br />
              Established: 2nd October 2009
            </p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-blue-100">
            © 2024 Ambica Foundation. All rights reserved. Serving communities with love and dedication.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer