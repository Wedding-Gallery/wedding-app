import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import weddingCard from "../assets/images/img1.jpeg";
import About from "../components/About";

function Home() {
  const [daysToGo, setDaysToGo] = useState(0);

  // Countdown Timer Logic
  useEffect(() => {
    const weddingDate = new Date("2024-12-28T00:00:00");
    const calculateDaysLeft = () => {
      const now = new Date();
      const timeDiff = weddingDate - now;
      setDaysToGo(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));
    };
    calculateDaysLeft();
    const timer = setInterval(calculateDaysLeft, 1000 * 60 * 60); // Update every hour
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      {/* Hero Section */}
      <section className="py-20 text-center bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <img
            src={weddingCard}
            alt="Wedding Card"
            className="max-w-xs mx-auto shadow-xl rounded-lg"
          />
          <p className="text-gray-500 italic text-lg mt-4">The wedding of</p>
          <h1 className="text-5xl font-serif font-bold mt-2 text-gray-700">
            Albert & Nidhi
          </h1>
          <p className="text-lg font-light mt-2">
            December 28, 2024 • Accra, Ghana
          </p>
          <p className="text-xl font-semibold mt-2 text-gray-600">
            {daysToGo} Days to Go!
          </p>
        </div>
        <nav className="flex justify-center mt-6 space-x-6 text-gray-700">
          <a href="#about" className="hover:underline">
            Our Story
          </a>
          <a href="#gallery" className="hover:underline">
            Photos
          </a>
          <a href="#venue" className="hover:underline">
            Venue
          </a>
        </nav>
      </section>

      {/* About Section */}
      <About />

      {/* Venue Section */}
      <section id="venue" className="py-16 px-6 bg-gray-200 text-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Venue & Location</h2>
          <p className="text-lg mb-6">Greenwood Gardens, Springfield, MA</p>
          <div className="overflow-hidden rounded-lg shadow-lg max-w-4xl mx-auto">
            <iframe
              title="Venue Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2069753701543!2d-122.08572568468155!3d37.42199977982495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24e4f4b6b65%3A0xc02cc6af4c7714e7!2sGoogleplex!5e0!3m2!1sen!2sus!4v1635863433329!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
