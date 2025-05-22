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

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-900">Our Services</h1>

      <div className="mb-4">
        <label htmlFor="service-select" className="block text-lg font-semibold mb-2 text-blue-900">
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
    </div>
  );
};

export default Services;
