import React from 'react'

const Medicalcamps = () => {
  return (
    <div>
      {/* Medical Camps */}
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 border-l-4 border-red-500">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">🏥 Medical Camps in Rural Areas</h2>
        <ul className="list-disc pl-5 text-gray-800 space-y-2">
          <li>Conducted in association with MS Ramaiah Hosp, Bangalore</li>
          <li>Provided free health checkups</li>
          <li>Distributed free prescribed medicines</li>
          <li>Health checkups including pediatric, old age</li>
          <li>Helped in getting surgeries done free of cost</li>
          <li>Free eye checkups</li>
          <li>Donated free hearing aids</li>
          <li>Provided free inhalers/masks for asthma patients</li>
        </ul>
      </div>
    </div>
  )
}

export default Medicalcamps
