import React from 'react';
import { CheckCircle } from 'lucide-react';

const services = [
  "Distributed blankets to poor & needy",
  "Conducted Sankranthi Muggula Potilu (Rangoli Competition) every year",
  "Donated sewing machines to unemployed women",
  "Donated street lights to villages",
  "Helped in borewell installation",
  "Provided financial assistance to poor students",
  "Served free food during COVID times",
  "Sent rice bags & wheat to Kerala during floods for relief"
];

const OtherServices = () => {
  return (
    <section className="bg-gray-300 py-10 px-4">
      <div className="bg-white rounded-2xl p-6 md:p-10 max-w-6xl mx-auto shadow-lg">
        <h2 className="text-center text-3xl font-bold text-red-700 mb-8">
          Other Services
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Text List */}
          <ul className="space-y-4 flex-1">
            {services.map((service, index) => (
              <li key={index} className="flex items-start space-x-3 text-gray-700 text-lg">
                <CheckCircle className="text-green-600 mt-1" size={20} />
                <span>{service}</span>
              </li>
            ))}
          </ul>

          {/* Image */}
          <div className="flex-1 flex h-100 w-5 justify-center">
            <img
              src="/images/others.png"
              alt="Community service activities"
              className="w-full max-w-md rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
