import React from 'react'

const Ambulanceservices = () => {
  return (
    <div>
      
      {/* Ambulance Services */}
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 mb-8 border-l-4 border-blue-600">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">🚑 Ambulance Services</h2>
        <ul className="list-disc pl-5 text-gray-800 space-y-2">
          <li><span className="font-semibold text-red-600">Run Km:</span> 4,00,000</li>
          <li><span className="font-semibold text-red-600">Cases:</span> 2,000 (around)</li>
          <li>To Bangalore, Anantapur, Puttaparthi hospitals</li>
        </ul>
      </div>
      </div>
  )
}

export default Ambulanceservices