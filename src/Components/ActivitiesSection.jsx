import React from 'react';
import { motion } from 'framer-motion';
import ActivityCard from './ActivityCard';

const ActivitiesSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: 'easeOut',
      },
    }),
  };

  const activities = [
    {
      // icon: "🩸",
      icon: <img src="/images/BloodDonation1.png" alt="Blood Donation" className="w-100 h-47 inline-block" />,
      title: "Blood Donation Camps",
      description: "Regular blood donation drives to support local hospitals and emergency medical needs.",
      link: "/BloodDonation"
    },
    {
      // icon: "🏏",
      icon: <img src="/images/Cricket2.png" alt="cricket kit distribution" className="w-100 h-47 inline-block" />,
      title: "Cricket Kit Distribution",
      description: "Providing cricket equipment to young athletes to encourage sports participation."
      , link: "/CricketPage"
    },
    {
     
      // icon: "📚",
      icon: <img src="/images/MedicalAid2.png" alt="Medicine distribution" className="w-100 h-47 inline-block" />,
      title: "Medicine Distribution",
      description: "Free medicine distribution to senior citizens and underprivileged communities."
      , link: "/Medicine"
    },
    {
      // icon: "🌱",
      icon: <img src="/images/Plantation1.png" alt="plantation" className="w-100 h-47 inline-block" />,
      title: "Plantation Programs",
      description: "Environmental conservation through tree plantation and green awareness campaigns."
      , link: "/Planation"
    },
    {
      // icon: "💧",
      icon: <img src="/images/WaterSupply2.png" alt="Water Supply" className="w-100 h-47 inline-block" />,
      title: "Water Supply",
      description: "Free drinking water supply to communities during water scarcity and emergency situations."
      , link: "/WaterSupply"
    },
    {
      // icon: "🏥",
      icon: <img src="/images/Hospital2.png" alt="Hospital Visits" className="w-100 h-47 inline-block" />,
      title: "Hospital Visits",
      description: "Regular visits to hospitals to support patients and their families during medical emergencies."
      , link: "/Hospital"
    }
  ];

  return (
    <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-3xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Our Activities
        </motion.h2>

        <motion.p
          className="text-l text-gray-600 max-w-3xl mx-auto text-center mb-10"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Discover our ongoing and upcoming community initiatives that make a real difference.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 2}
            >
              <ActivityCard
                icon={activity.icon}
                title={activity.title}
                description={activity.description}
                delay={index * 200}
                link={activity.link} // ✅ This line was missing before
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
