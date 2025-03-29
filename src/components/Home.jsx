
import React, { useState, useEffect } from "react";
import videoFile from "../assets/vediohome.mp4"; // Ensure correct path

const Home = () => {
  const [text, setText] = useState("");
  const fullText = "Get Your Project Now!";
  const typingSpeed = 160; // Adjust speed as needed

  // Typing Effect Logic
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Cleanup
  }, []);

  // Function to scroll to Contact Us section
  const scrollToContact = () => {
    const contactSection = document.getElementById("ContactUs");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoFile}
        autoPlay
        loop
        muted
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center bg-black bg-opacity-30">
        {/* Typing Effect for Heading */}
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          {text || "_"} {/* Show a blinking underscore if empty */}
        </h1>

        <p className="text-white text-lg md:text-xl mt-4 max-w-2xl">
          We provide expert guidance and ready-made projects for students.
        </p>

        {/* Button to Scroll to Contact Section */}
        <button
          onClick={scrollToContact}
          className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition"
        >
          DM For Projects
        </button>
      </div>
    </div>
  );
};

export default Home;
