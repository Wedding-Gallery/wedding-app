import React from "react";
import Navbar from "../components/Navbar";
import vid4 from "../assets/videos/vid4.mp4"
import img1 from "../assets/images/img1.jpeg"

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
        >
          <source src={vid4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold font-serif mb-4">
            Join Us to Celebrate This Special Day
          </h1>
          <p className="text-lg font-light mb-6">
            We can't wait to share our love and joy with you.
          </p>
          <button className="px-6 mr-4 py-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-700 transition duration-300">
            Send us a message
          </button>
          <button className="px-6 py-3 bg-[#ade95f] text-gray-500 rounded-full shadow-lg hover:bg-[#166534] hover:text-white transition duration-300">
            Post a photo/video
          </button>
        </div>
      </section>

      {/* About the Couple Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-700">
            About the Couple
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text with Fade-In Animation */}
            <div className="animate-fadeInLeft">
              <h3 className="text-2xl font-bold mb-4">How We Met</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                It all started with a chance encounter at a cozy coffee shop.
                Albert spilled his coffee, and Nidhi graciously helped him
                clean up. Little did they know, that moment would be the
                beginning of a beautiful love story that continues to blossom
                every day.
              </p>
            </div>
            {/* Image with Fade-In Animation */}
            <div className="animate-fadeInRight">
              <img
                src={img1}
                alt="Albert and Nidhi"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-16 px-6 bg-gray-200 text-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Venue & Location</h2>
          <p className="text-lg mb-6">Holy Family Catholic Church, Mataheko, Accra, Ghana</p>
          <div className="overflow-hidden rounded-lg shadow-lg max-w-4xl mx-auto">
            <iframe
              title="Venue Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31729.255936247303!2d-0.23337789726683994!3d5.560621592799362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a771b3b552d%3A0x4ddc3792a62bb4cb!2sHoly%20Family%20Catholic%20Church%20Mataheko!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
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
