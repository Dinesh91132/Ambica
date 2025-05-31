import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-12 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
    <div>
      <h2 className="text-xl font-bold mb-3">About Ambica Foundation</h2>
      <p className="text-sm leading-relaxed text-gray-200">
        Established on 2nd October 2009 (Gandhi Jayanthi), serving the people of Hindupur Constituency with dedication and compassion.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold mb-3">Our Mission</h2>
      <p className="text-sm leading-relaxed text-gray-200">
        To provide comprehensive support through healthcare, education, employment opportunities, and community development initiatives.
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold mb-3">Contact Info</h2>
      <p className="text-sm text-gray-200">Serving Hindupur Constituency, India</p>
      <p className="text-sm text-gray-200 mt-1">Established: 2nd October 2009</p>
    </div>
  </div>

  <div className="border-t border-indigo-400 mt-10 pt-6 text-center text-xs text-gray-300">
    © 2024 Ambica Foundation. All rights reserved. Serving communities with love and dedication.
  </div>
</footer>

  );
};

export default Footer