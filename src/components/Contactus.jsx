
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div 
      id="ContactUs"
      className="w-full min-h-6 flex flex-col items-center justify-center bg-gradient-to-r from-[#c5cad3] to-[#e7f2f5] px-6 py-6"
      // Apply AOS animation
    >
      <div className="max-w-3xl text-center p-4" data-aos="zoom-in-down" >
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-wide">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          We'd love to hear from you! Reach out to us for any inquiries or support.
        </p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Our Contact Info</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:flex-nowrap mt-4">
            <p className="text-lg text-gray-700">
              Email: <a href="mailto:CodeCrept@gmail.com" className="text-blue-600">CodeCrept@gmail.com</a>
            </p>
            <span className="hidden sm:block">|</span> {/* Separator for larger screens */}
            <p className="text-lg text-gray-700">
              Mobile: <span className="text-blue-600">+91-8050772852</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
