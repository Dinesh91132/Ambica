import React from 'react';

const StatCard = ({ number, label, delay }) => {
  return (
    <div
      className="bg-white shadow-xl rounded-2xl p-6 text-center transform transition duration-500 hover:scale-105 opacity-0 animate-fadeInUp"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="text-5xl font-extrabold text-blue-600">{number}</div>
      <div className="mt-3 text-lg font-semibold text-gray-700">{label}</div>
    </div>
  );
};

export default StatCard;