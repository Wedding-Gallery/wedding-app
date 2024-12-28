import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pic3 from "../assets/images/pic3.jpg";
import pic2 from "../assets/images/pic2.jpg";
import pic4 from "../assets/images/pic4.jpg";

const LandingPage = () => {
  // Array of alternating images
  const images = [pic3, pic2, pic4];

  const [currentImage, setCurrentImage] = useState(0);

  // Image alternation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const [daysToGo, setDaysToGo] = useState(0);

  // // Countdown Timer Logic
  // useEffect(() => {
  //   const weddingDate = new Date("2024-12-28T00:00:00");
  //   const calculateDaysLeft = () => {
  //     const now = new Date();
  //     const timeDiff = weddingDate - now;
  //     setDaysToGo(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));
  //   };
  //   calculateDaysLeft();
  //   const timer = setInterval(calculateDaysLeft, 1000 * 60 * 60); // Update every hour
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden z-[-1]">
        <img
          src={images[currentImage]}
          alt="Wedding Background"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Top Navigation */}
      {/* <div className="absolute top-4 right-4 mx-auto flex justify-between items-center space-x-4">
        <ul className="flex space-x-6 text-yellow-400 text-lg font-medium">
          
            <Link
              to="/about"
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              About
            </Link>
         
            <Link
              to="/gallery"
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              Gallery
            </Link>
          
        </ul>
      </div> */}

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4 sm:px-10">
        <h1 className="text-4xl sm:text-5xl mb-4 font-serif font-bold mt-2">
          Albert & Nidhi's Wedding
        </h1>
        <p className="text-base sm:text-lg mb-6">
          Join us on{" "}
          <span className="font-semibold">
            December 28, 2024 • Holy Family Catholic Church, Mataheko
          </span>{" "}
          for our special day.
        </p>
        <p className="text-lg sm:text-xl font-semibold mt-2 text-gray-300 mb-6">
           It's Today!
        </p>
        <Link to="/home">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg text-lg shadow-md transition-transform duration-300 hover:scale-105">
            Explore the Celebration
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
