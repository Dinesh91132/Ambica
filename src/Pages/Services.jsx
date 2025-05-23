import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  { label: "Blood Donation", path: "/blood-donation" },
  { label: "Sports", path: "/sports" },
  { label: "Plantation", path: "/plantation" },
  { label: "Ambulance Services", path: "/ambulance" },
  { label: "Medical Camps", path: "/medical-camps" },
  { label: "Employment", path: "/employment" },
  { label: "Free Drinking Water Supply", path: "/water-supply" },
  { label: "Education", path: "/education" },
  { label: "Other Services", path: "/other-services" },
];

const Services = () => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const selected = services.find((s) => s.label === e.target.value);
    if (selected) {
      navigate(selected.path);
    }
  };

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="p-6 max-w-7xl bg-gray-300 mx-auto min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">Our Services</h1>

      {/* Dropdown selector */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mb-8 animate-slideFadeIn">
        <label
          htmlFor="service-select"
          className="block text-lg font-semibold mb-2 text-blue-900"
        >
          Choose a service:
        </label>
        <select
          id="service-select"
          className="w-full p-2 border border-blue-900 rounded text-red-500"
          onChange={handleChange}
          defaultValue=""
        >
          <option value="">-- Select a service --</option>
          {services.map((service) => (
            <option key={service.label} value={service.label}>
              {service.label}
            </option>
          ))}
        </select>
      </div>

      {/* Buttons list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {services.map((service) => (
          <button
            key={service.label}
            onClick={() => handleClick(service.path)}
            className="bg-white text-blue-900 font-semibold py-3 px-4 rounded shadow hover:bg-blue-100 transition duration-200 animate-slideFadeIn"
          >
            {service.label}
          </button>
        ))}
      </div>

      {/* Animation CSS */}
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

export default Services;
