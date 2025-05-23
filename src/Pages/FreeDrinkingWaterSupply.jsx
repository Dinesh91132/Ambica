import React from "react";

const FreeDrinkingWaterSupply = () => {
  return (
    <div className="min-h-screen bg-gray-300">
    <div className="p-6 max-w-5xl mx-auto min-h-screen bg-gray-300 text-gray-900">
      {/* Red heading
      <h1 className="text-4xl font-bold mb-6 text-center text-red-600 animate-slideDown">
       Free Drinking Water Supply
      </h1> */}

      {/* Gray background box */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md animate-fadeInBox">
        <h1 className="text-4xl font-bold mb-6 text-center text-red-600 animate-slideDown">
       Free Drinking Water Supply
       </h1>
        <p className="mb-4 text-lg text-gray-900">
          Ensuring access to safe and clean drinking water is one of our top priorities. Our team has actively worked to
          mitigate water scarcity and provide relief during the harsh summer seasons.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-base text-gray-900">
          <li>
            <strong className="text-gray-900">RO Water Points:</strong> Supplied Reverse Osmosis (RO) purified water in over
            30 locations across various neighborhoods to support healthy living.
          </li>
          <li>
            <strong className="text-gray-900">Summer Relief Tanks:</strong> Deployed clean drinking water tanks in water-scarce
            areas during peak summer to ensure no one goes without hydration.
          </li>
          <li>
            <strong className="text-gray-900">Community Awareness:</strong> Conducted awareness drives on the importance of
            water conservation and hygienic storage practices.
          </li>
          <li>
            <strong className="text-gray-900">24/7 Availability:</strong> Emergency water supply support is available for local
            events, public gatherings, and crisis situations.
          </li>
        </ul>

        <p className="mt-6 text-lg text-gray-900">
          We believe that access to drinking water is a basic human right, and we're committed to expanding this initiative
          further with community support.
        </p>
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInBox {
            from { opacity: 0; transform: scale(0.98); }
            to { opacity: 1; transform: scale(1); }
          }

          .animate-slideDown {
            animation: slideDown 0.5s ease-out forwards;
          }

          .animate-fadeInBox {
            animation: fadeInBox 0.6s ease-out forwards;
          }
        `}
      </style>
    </div>
    </div>
  );
};

export default FreeDrinkingWaterSupply;
