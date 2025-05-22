import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white py-12 px-4 text-center">
      {/* Flex container for image, services, contact, and quick links */}
      <div className="flex flex-col md:flex-row justify-center gap-12 max-w-6xl mx-auto text-left items-start">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="/images/logo.png" // ✅ Correct path if image is in public/images
            alt="Ambika Foundation"
            className="w-48 h-auto rounded shadow-md"
          />
        </div>

        {/* Services List */}
        <div>
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Our Services</h2>
          <ul className="space-y-2 list-disc text-blue-900 list-inside">
            <li>Blood Donation</li>
            <li>Sports</li>
            <li>Ambulance Services</li>
            <li>Medical Camps</li>
            <li>Employment</li>
            <li>Education</li>
            <li>Plantation</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Contact Us</h2>
          <p className="text-blue-900 mb-2">
            <strong>Location:</strong><br />
            Ambika Foundation,<br />
            Bangalore,<br />
            India
          </p>
          <p className="text-blue-900 mb-2">
            <strong>Email:</strong> info@ambikafoundation.org
          </p>
          <p className="text-blue-900">
            <strong>Phone:</strong> +91 9990000055
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Quick Links</h2>
          <ul className="space-y-2 text-blue-900">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
