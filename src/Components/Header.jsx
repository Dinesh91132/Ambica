

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  { label: "BloodDonation", path: "/bloodDonation" },
  { label: "Sports", path: "/sports" },
  { label: "Plantation", path: "/Plantation" },
  { label: "Ambulanceservices", path: "/Ambulanceservices" },
  { label: "Medicalcamps", path: "/Medicalcamps" },
  { label: "Employment", path: "/employment" },
  { label: "Free Drinking Water Supply", path: "/water-supply" },
  { label: "Education", path: "/education" },
  { label: "Other Services", path: "/other-services" },
];

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <header className="bg-white shadow py-6 px-8 flex justify-between items-center relative z-50">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img
          src="/images/logo.png"
          alt="Ambica Foundation"
          className="h-20 w-32 object-contain"
        />
        <span className="text-3xl font-extrabold text-blue-900">AMBICA FOUNDATION</span>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-8 font-semibold text-lg items-center">
          <li><Link to="/" className="hover:text-red-500 text-blue-900">Home</Link></li>
          <li><Link to="/about" className="hover:text-red-500 text-blue-900">About</Link></li>
          
          {/* Services (Click to open) */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 hover:text-red-500 text-blue-900 font-semibold focus:outline-none"
              type="button"
            >
              Services
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg py-2 z-50">
                {services.map(service => (
                  <li key={service.label}>
                    <Link
                      to={service.path}
                      className="block px-4 py-2 text-gray-900 hover:bg-blue-100 hover:text-blue-900"
                      onClick={closeDropdown}
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><Link to="/contact" className="hover:text-red-500 text-blue-900">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


