
import React from "react";


const Header = () => {
  return (
    <header className="bg-white shadow py-6 px-8 flex justify-between items-center">
      {/* Image and Brand Name */}
      <div className="flex items-center space-x-4">
        <img
          src="./public/images/logo.png"
          alt="Ambika Foundation"
          className="h-30 w-32 object-contain" // Increased from h-10 w-16 to h-20 w-32
        />
        <span className="text-3xl font-extrabold text-blue-900">AMBIKA FOUNDATION</span>
      </div>

      {/* Navigation Links */}
      <nav className="space-x-8 font-semibold text-lg">
        <a href="#" className="hover:text-red-500 text-blue-900">Home</a>
        <a href="#" className="hover:text-red-500 text-blue-900">About</a>
        <a href="#" className="hover:text-red-500 text-blue-900">Services</a>
        <a href="#" className="hover:text-red-500 text-blue-900">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;

