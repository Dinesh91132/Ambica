import React from 'react'
import ActivityCard from './ActivityCard';

const ActivitiesSection = () => {
  const activities = [
    {
      icon: "🩸",
      title: "Blood Donation Camps",
      description: "Regular blood donation drives to support local hospitals and emergency medical needs."
    },
    {
      icon: "🏏",
      title: "Cricket Kit Distribution",
      description: "Providing cricket equipment to young athletes to encourage sports participation."
    },
    {
      icon: "💊",
      title: "Medicine Distribution",
      description: "Free medicine distribution to senior citizens and underprivileged communities."
    },
    {
      icon: "🌱",
      title: "Plantation Programs",
      description: "Environmental conservation through tree plantation and green awareness campaigns."
    },
    {
      icon: "💧",
      title: "Water Supply",
      description: "Free drinking water supply to communities during water scarcity and emergency situations."
    },
    {
      icon: "🏥",
      title: "Hospital Visits",
      description: "Regular visits to hospitals to support patients and their families during medical emergencies."
    }
  ];

  return (
    <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-0 text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text mb-0 animate-fade-in-up py-1 text-transparent">
          Our Activities
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto py-2 mb-10 text-center animate-fade-in-up" style={{animationDelay: '200ms'}}>
            Discover our ongoing and upcoming community initiatives that make a real difference.
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard 
              key={index}
              icon={activity.icon}
              title={activity.title}
              description={activity.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection