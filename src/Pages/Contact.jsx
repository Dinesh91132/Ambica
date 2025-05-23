import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-5xl font-extrabold text-[#122f6b] mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12 w-full max-w-5xl bg-white p-10 rounded-3xl shadow-2xl animate-slideFadeIn">
        {/* Contact Information Section */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Mail className="text-[#122f6b] w-6 h-6 mt-1" />
            <div>
              <h4 className="font-bold text-[#122f6b]">Email</h4>
              <p className="text-gray-600">dineshdn2020@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-[#aa1c1c] w-6 h-6 mt-1" />
            <div>
              <h4 className="font-bold text-[#122f6b]">Phone</h4>
              <p className="text-gray-600">+91 91132 90659</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-[#f5b642] w-6 h-6 mt-1" />
            <div>
              <h4 className="font-bold text-[#122f6b]">Location</h4>
              <p className="text-gray-600">Bengaluru – 560076, INDIA</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[#122f6b] mb-1">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#122f6b] outline-none"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#122f6b] mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#122f6b] outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#122f6b] mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#aa1c1c] outline-none"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#aa1c1c] hover:bg-green-800 text-white font-bold py-3 px-6 rounded-xl transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Animation CSS */}
      <style>
        {`
          @keyframes slideFadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slideFadeIn {
            animation: slideFadeIn 0.6s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
