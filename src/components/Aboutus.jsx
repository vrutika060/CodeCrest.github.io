// import React from "react";

// const Aboutus = () => {
//   return (
//     <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
//       <div className="max-w-3xl text-center">
//         <h2 className="text-4xl font-bold text-gray-900 mb-4">About CodeCrept</h2>
//         <p className="text-lg text-gray-700 leading-relaxed">
//           At <span className="font-semibold">CodeCrept</span>, our mission is to provide students with expertly crafted projects 
//           and personalized support to help them achieve academic success. We offer ready-made projects tailored 
//           to meet your unique requirements, along with expert guidance to ensure quality work.
//         </p>

//         <h3 className="text-2xl font-semibold text-gray-900 mt-6">Why Choose CodeCrept?</h3>
//         <p className="text-lg text-gray-700 leading-relaxed mt-2">
//           We take pride in our commitment to quality, on-time delivery, and customer satisfaction. Our team 
//           works tirelessly to ensure that your projects meet all academic standards, and we’re always available 
//           to offer support whenever you need it.
//         </p>

//         <p className="text-lg text-gray-700 leading-relaxed mt-4">
//           Explore our services or contact us today to get started!
//         </p>

//         <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition">
//           Contact Us
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Aboutus;



// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Import AOS styles

// const Aboutus = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
//   }, []);

//   return (
//     <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-[#e7f2f5] to-[#2a5298] px-6 py-12">
//       <div
//         className="max-w-4xl p-10 text-center"
//         data-aos="fade-up"
//       >
//         {/* Title */}
//         <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-wide">
//           About Code<span className="text-orange-500">Crept</span>
//         </h2>

//         {/* Mission Statement */}
//         <p className="text-lg text-gray-700 leading-relaxed" data-aos="fade-up">
//           <span className="font-semibold text-blue-600">CodeCrept</span> is committed to providing students with expertly crafted projects and personalized support to help them succeed academically. We offer high-quality, ready-made projects tailored to your needs, ensuring top-notch results.
//         </p>

//         {/* Why Choose Us */}
//         <div className="mt-6 grid md:grid-cols-2 gap-6">
//           <div className="p-6 bg-gray-100 rounded-lg shadow-md" data-aos="fade-right">
//             <h3 className="text-xl font-semibold text-gray-900">Expert Guidance</h3>
//             <p className="text-gray-700 mt-2">
//               Get one-on-one support from professionals who ensure your projects meet academic standards.
//             </p>
//           </div>

//           <div className="p-6 bg-gray-100 rounded-lg shadow-md" data-aos="fade-left">
//             <h3 className="text-xl font-semibold text-gray-900">On-Time Delivery</h3>
//             <p className="text-gray-700 mt-2">
//               We prioritize timely submission so you never miss a deadline.
//             </p>
//           </div>

//           <div className="p-6 bg-gray-100 rounded-lg shadow-md" data-aos="fade-right">
//             <h3 className="text-xl font-semibold text-gray-900">Customized Solutions</h3>
//             <p className="text-gray-700 mt-2">
//               Every project is tailored to your specific requirements.
//             </p>
//           </div>

//           <div className="p-6 bg-gray-100 rounded-lg shadow-md" data-aos="fade-left">
//             <h3 className="text-xl font-semibold text-gray-900">Customer Satisfaction</h3>
//             <p className="text-gray-700 mt-2">
//               Our top priority is ensuring you receive high-quality projects that exceed expectations.
//             </p>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <button
//           className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transform transition duration-300 ease-in-out"
//           data-aos="zoom-in"
//         >
//           Contact Us
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Aboutus;



// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Import AOS styles

// const Aboutus = () => {
//   const [aosKey, setAosKey] = useState(0);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: false }); // Set once to false to re-trigger animations
//     AOS.refresh(); // Refresh AOS when revisiting

//     // Reset AOS key to force animation restart on re-entry
//     setAosKey((prevKey) => prevKey + 1);
//   }, []);

//   return (
//     <div id="Aboutus"
//       key={aosKey}
//       className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-[#e7f2f5] to-[#2a5298] px-6 py-12"
//     >
//       <div className="max-w-4xl p-10 text-center" data-aos="fade-up">
//         {/* Title */}
//         <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-wide">
//           About Code<span className="text-orange-500">Crept</span>
//         </h2>

//         {/* Mission Statement */}
//         <p className="text-lg text-gray-700 leading-relaxed" data-aos="fade-up">
//           <span className="font-semibold text-blue-600">CodeCrept</span> is committed to providing students with expertly crafted projects and personalized support to help them succeed academically. We offer high-quality, ready-made projects tailored to your needs, ensuring top-notch results.
//         </p>

//         {/* Why Choose Us */}
//         <div className="mt-6 grid md:grid-cols-2 gap-6">
//           <div data-aos="zoom-in-up">
//             <div className="p-6 bg-gray-100 rounded-lg shadow-md" data-aos="fade-right">
//               <h3 className="text-xl font-semibold text-gray-900">Expert Guidance</h3>
//               <p className="text-gray-700 mt-2">
//                 Get one-on-one support from professionals who ensure your projects meet academic standards.
//               </p>
//             </div>
//           </div>

//           <div data-aos="zoom-in-up">
//             <div className="p-6 bg-gray-100 rounded-lg shadow-md" data-aos="fade-left">
//               <h3 className="text-xl font-semibold text-gray-900">On-Time Delivery</h3>
//               <p className="text-gray-700 mt-2">
//                 We prioritize timely submission so you never miss a deadline.
//               </p>
//             </div>
//           </div>

//           <div data-aos="zoom-in-up">
//             <div className="p-6 bg-gray-100 rounded-lg shadow-md" data-aos="fade-right">
//               <h3 className="text-xl font-semibold text-gray-900">Customized Solutions</h3>
//               <p className="text-gray-700 mt-2">
//                 Every project is tailored to your specific requirements.
//               </p>
//             </div>
//           </div>

//           <div data-aos="zoom-in-up">
//             <div className="p-6 bg-gray-100 rounded-lg shadow-md" data-aos="fade-left">
//               <h3 className="text-xl font-semibold text-gray-900">Customer Satisfaction</h3>
//               <p className="text-gray-700 mt-2">
//                 Our top priority is ensuring you receive high-quality projects that exceed expectations.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <button
//           className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transform transition duration-300 ease-in-out"
//           data-aos="zoom-in" 
//         >
//           Contact Us
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Aboutus;


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
