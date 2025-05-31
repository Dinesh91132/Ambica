// import React from 'react'

// const StatsSection = () => {
//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
//           Our Impact in Numbers
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <StatCard number="15+" label="Years of Service" delay={0} />
//           <StatCard number="800+" label="Lives Saved" delay={200} />
//           <StatCard number="50+" label="Villages Served" delay={400} />
//           <StatCard number="1000+" label="Students Supported" delay={600} />
//         </div>
//       </div>
//     </section>
//   );
// };
// export default StatsSection
import React from 'react';
import StatCard from './StatCard'; // Make sure this path is correct

const StatsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <StatCard number="15+" label="Years of Service" delay={0} />
          <StatCard number="800+" label="Lives Saved" delay={150} />
          <StatCard number="50+" label="Villages Served" delay={300} />
          <StatCard number="1000+" label="Students Supported" delay={450} />
        </div>
</div>
      
    </section>
  );
};

export default StatsSection;