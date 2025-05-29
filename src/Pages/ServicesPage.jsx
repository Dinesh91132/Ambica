import React from 'react';
import ServicesSection from '../Components/ServicesSection';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="page-header">
        {/* <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support services designed to uplift communities and create lasting positive impact.
          </p>
        </div> */}
      </div>
      <ServicesSection />
    </div>
  );
};

export default ServicesPage;