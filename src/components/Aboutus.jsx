
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Aboutus = () => {
  const [aosKey, setAosKey] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Set once to false to re-trigger animations
    AOS.refresh(); // Refresh AOS when revisiting

    // Reset AOS key to force animation restart on re-entry
    setAosKey((prevKey) => prevKey + 1);
  }, []);

  // Function to scroll to the ContactUs section smoothly
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("ContactUs");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="Aboutus"
      key={aosKey}
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-[#e7f2f5] to-[#2a5298] px-6 py-12"
    >
      <div className="max-w-4xl p-10 text-center" data-aos="fade-up">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-wide">
          About Code<span className="text-orange-500">Crest</span>
        </h2>

        {/* Mission Statement */}
        <p className="text-lg text-gray-700 leading-relaxed" data-aos="fade-up">
          <span className="font-semibold text-blue-600">CodeCrest</span> is committed to providing students with expertly crafted projects and personalized support to help them succeed academically. We offer high-quality, ready-made projects tailored to your needs, ensuring top-notch results.
        </p>

        {/* Why Choose Us */}
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div data-aos="zoom-in-up">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md" data-aos="fade-right">
              <h3 className="text-xl font-semibold text-gray-900">Expert Guidance</h3>
              <p className="text-gray-700 mt-2">
                Get one-on-one support from professionals who ensure your projects meet academic standards.
              </p>
            </div>
          </div>

          <div data-aos="zoom-in-up">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md" data-aos="fade-left">
              <h3 className="text-xl font-semibold text-gray-900">On-Time Delivery</h3>
              <p className="text-gray-700 mt-2">
                We prioritize timely submission so you never miss a deadline.
              </p>
            </div>
          </div>

          <div data-aos="zoom-in-up">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md" data-aos="fade-right">
              <h3 className="text-xl font-semibold text-gray-900">Customized Solutions</h3>
              <p className="text-gray-700 mt-2">
                Every project is tailored to your specific requirements.
              </p>
            </div>
          </div>

          <div data-aos="zoom-in-up">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md" data-aos="fade-left">
              <h3 className="text-xl font-semibold text-gray-900">Customer Satisfaction</h3>
              <p className="text-gray-700 mt-2">
                Our top priority is ensuring you receive high-quality projects that exceed expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <button
          className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transform transition duration-300 ease-in-out"
          data-aos="zoom-in"
          onClick={handleScrollToContact} // Scroll on click
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Aboutus;
