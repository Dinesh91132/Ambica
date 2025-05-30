import React from 'react';
import { Link } from 'react-router-dom';

const ActivityCard = ({ icon, title, description, delay, link }) => {
  const buttonClass =
    "inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition";

  return (
    <div 
      className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-48 bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
        {link ? (
          <Link to={link} className={buttonClass}>
            Learn More
          </Link>
        ) : (
          <button className={buttonClass}>
            Learn More
          </button>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;
