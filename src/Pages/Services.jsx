
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  { label: "BloodDonation", path: "/BloodDonation" },
  { label: "Sports", path: "/sports" },
  { label: "Plantation", path: "/plantation" },
  { label: "Ambulanceservices", path: "/Ambulanceservices" },
  { label: "Medicalcamps", path: "/Medicalcamps" },
  { label: "Employment", path: "/Employment" },
  { label: "FreeDrinkingWaterSupply", path: "/FreeDrinkingWaterSupply" },
  { label: "Education", path: "/Education" },
  { label: "OtherServices", path: "/OtherServices" },
];

const Services = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const handleServiceClick = (path) => {
    navigate(path);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="p-6 max-w-7xl bg-gray-300 mx-auto min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">Our Services</h1>

      <div
        className="relative max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-center"
        ref={dropdownRef}
      >
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-center gap-2 bg-blue-900 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800 transition"
        >
          Services
          
        </button>

        {isDropdownOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-lg z-10 animate-fadeSlide">
            <ul className="list-none p-4">
              {services.map((service, index) => (
                <li key={index} className="py-2 text-left">
                  <button
                    onClick={() => handleServiceClick(service.path)}
                    className="text-blue-900 hover:text-blue-600 transition"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes fadeSlide {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeSlide {
            animation: fadeSlide 0.999s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default Services;

