// src/pages/Sports.jsx
import React from "react";

const Sports = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-900">Sports Initiatives</h1>

      <p className="text-lg mb-4">
        We are committed to promoting rural sports and empowering young talent through various activities and support programs. Some of our key initiatives include:
      </p>

      <ul className="list-disc list-inside space-y-3 text-black-800">
        <li>
          Conducted Volleyball and Cricket tournaments to encourage sports culture in rural areas.
        </li>
        <li>
          Provided free cricket kits to underprivileged players in rural regions to help them pursue their passion.
        </li>
        <li>
          Successfully organized the Simhapuri Premier League in Nellore, an inter-state cricket tournament showcasing regional talent.
        </li>
      </ul>

      <div className="mt-6 text-center">
        <p className="text-lg text-red-500 font-semibold">
          Join us in building a strong sporting spirit and empowering rural athletes!
        </p>
      </div>
    </div>
  );
};

export default Sports;
