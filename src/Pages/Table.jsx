import React from 'react'

const CompanyInfo = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-300 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Ambika Foundation - Company Profile</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-base">
          <div>
            <p><span className="font-semibold">Name of CEO:</span> Mr. P.K. Roy</p>
            <p><span className="font-semibold">Business Type:</span> Placement Consultant</p>
            <p><span className="font-semibold">Legal Status of Firm:</span> Individual (Sole Proprietorship)</p>
            <p><span className="font-semibold">Year of Establishment:</span> 1994</p>
            <p><span className="font-semibold">Turnover:</span> ₹20 Lakhs</p>
            <p><span className="font-semibold">Number of Employees:</span> 5+</p>
          </div>

          <div>
            <p><span className="font-semibold">Services We Offer:</span></p>
            <ul className="list-disc list-inside ml-4">
              <li>blood donation</li>
              <li>sports</li>
              <li>plantation</li>
              <li>ambulance service</li>
              <li>medical camps</li>
              <li>employment</li>
              <li>free drinking water supply</li>
              <li>Education</li>
              
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <p className="font-semibold mb-2">Industries We Serve:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
            {[
              "Automobile", "Banking & Finance", "BPO", "Construction", "Education & Training", 
              "Engineering & Technical", "Event Management", "Export & Import", "FMCG", "Insurance", 
              "IT & ITES", "Manufacturing & Operations", "Medical / Healthcare / Pharmaceuticals", 
              "Renewable Energy", "Retail", "Sales & Marketing", "Telecom / Technology / ISP", 
              "Tour & Travel"
            ].map((industry, index) => (
              <div key={index} className="bg-gray-200 px-3 py-1 rounded">{industry}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyInfo
