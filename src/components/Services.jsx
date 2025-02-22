

//currected code
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { FaLaptopCode, FaRobot, FaBrain, FaMobileAlt } from 'react-icons/fa'; // Importing icons

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
  }, []);

  return (
    <div id="Services" className="w-full min-h-[35vh] flex flex-col items-center justify-center bg-gradient-to-r from-[#2a5298] to-[#e7f2f5] px-6 py-6">
      <div className="max-w-3xl text-center p-4" data-aos="fade-up">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-wide">
          Our Services
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          We provide the following services to meet your business and academic needs:
        </p>

        {/* Services Section */}
        <div className="space-y-4">
          {/* Web Development */}
          <div
            className="flex items-center p-3 transform transition-transform hover:scale-105"
            data-aos="zoom-in-up"
          >
            <div className="text-3xl text-blue-600 mr-3">
              <FaLaptopCode />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-700">
                Stunning websites, interactive web applications, and e-commerce solutions to help your business grow.
              </p>
            </div>
          </div>

          {/* Machine Learning */}
          <div
            className="flex items-center p-3 transform transition-transform hover:scale-105"
            data-aos="zoom-in-up"
          >
            <div className="text-3xl text-blue-600 mr-3">
              <FaRobot />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Machine Learning</h3>
              <p className="text-gray-700">
                Harness the power of AI for intelligent predictions and data-driven insights to boost efficiency.
              </p>
            </div>
          </div>

          {/* Deep Learning */}
          <div
            className="flex items-center p-3 transform transition-transform hover:scale-105"
            data-aos="zoom-in-up"
          >
            <div className="text-3xl text-blue-600 mr-3">
              <FaBrain />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deep Learning</h3>
              <p className="text-gray-700">
                Dive deep into neural networks for cutting-edge solutions that improve decision-making processes.
              </p>
            </div>
          </div>

          {/* Mobile App Development */}
          <div
            className="flex items-center p-3 transform transition-transform hover:scale-105"
            data-aos="zoom-in-up"
          >
            <div className="text-3xl text-blue-600 mr-3">
              <FaMobileAlt />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile App Development</h3>
              <p className="text-gray-700">
                We create straightforward mobile apps that match your needs perfectly, offering seamless user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

