import React from 'react';
import ActivitiesSection from '../Components/ActivitiesSection';

const ActivitiesPage = () => {
  return (
    <div className="activities-page">
      <div className="page-header">
        {/* <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Activities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our ongoing and upcoming community initiatives that make a real difference.
          </p>
        </div> */}
      </div>
      <ActivitiesSection />
    </div>
  );
};

export default ActivitiesPage;