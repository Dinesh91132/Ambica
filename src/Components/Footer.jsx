import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo and About - Centered on all screen sizes */}
        <div className="flex flex-col items-center">
          <img 
            src="./images/logo.png" 
            alt="Ambica Foundation Logo" 
            className="w-20 h-20 mb-0 object-contain"
          />
          <h1 className="text-3xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-500">Ambica Foundation</h1>
          <p className="text-sm text-gray-200 text-center leading-relaxed">
            Serving communities with love, dedication, and compassion since 2009.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <nav aria-label="Footer navigation">
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a 
                  href="#home" 
                  className="hover:text-white hover:underline transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="hover:text-white hover:underline transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="hover:text-white hover:underline transition-colors duration-200"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a 
                  href="#activities" 
                  className="hover:text-white hover:underline transition-colors duration-200"
                >
                  Activities
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:text-white hover:underline transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Info</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <MapPin className="w-4 h-4 text-blue-300 flex-shrink-0" />
              <span className="text-sm text-gray-200">
                Hindupur Constituency, Andhra Pradesh, India
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Phone className="w-4 h-4 text-green-300 flex-shrink-0" />
              <span className="text-sm text-gray-200">+91 XXXXX XXXXX</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Mail className="w-4 h-4 text-yellow-300 flex-shrink-0" />
              <span className="text-sm text-gray-200">info@ambicafoundation.org</span>
            </div>
            <p className="text-xs text-gray-300 mt-2">
              Established: 2nd October 2009
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-indigo-400 mt-3 pt-1">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="text-xs text-gray-300 mb-4 md:mb-0">
            © {currentYear} Ambica Foundation. All rights reserved. 
            <span className="block md:inline md:ml-2">
              Serving communities with love and dedication.
            </span>
          </div>
          <div className="flex space-x-4 text-xs text-gray-300">
            <a href="#privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;