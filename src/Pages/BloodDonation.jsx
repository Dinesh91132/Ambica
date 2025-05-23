import React from 'react';

const BloodDonation = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-red-700 mb-6">Blood Donation</h1>

        {/* Introduction */}
        <p className="text-gray-700 text-lg mb-4">
          At <span className="font-semibold text-blue-900">Ambica Foundation</span>, we believe in the power of giving. Blood donation is a simple yet powerful act that saves lives every day.
        </p>

        {/* Image Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <img
            src="/images/bloodDonation1.png"
            alt="Volunteers donating blood"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
          <img
            src="/images/bloodDonation2.png"
            alt="Ambica Foundation blood donation camp"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>

        {/* What We Do */}
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">Our Blood Donation Initiatives</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg mb-6 space-y-2">
          <li>We organize regular blood donation camps in rural and urban areas.</li>
          <li>We collaborate with local hospitals and blood banks to ensure safe and efficient donation processes.</li>
          <li>We spread awareness about the importance of regular voluntary blood donation.</li>
          <li>Our volunteers help donors before, during, and after the donation process.</li>
        </ul>

        {/* Call to Action */}
        <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-lg">
          <p className="text-red-700 font-semibold text-lg">
            Want to make a difference? Join our next blood donation drive and be a hero to someone in need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BloodDonation;
