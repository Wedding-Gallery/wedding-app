import React from "react";
import Navbar from "../components/Navbar";
import vid4 from "../assets/videos/vid4.mp4"
import img1 from "../assets/images/img1.jpeg"
import {Link} from "react-router-dom"

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
         <Link to="/message">
         <button className="px-6 mr-4 py-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-700 transition duration-300">
            Send us a message
          </button>
          </Link>
          <Link to="/upload">
          <button className="px-6 py-3 bg-[#ade95f] text-gray-500 rounded-full shadow-lg hover:bg-[#166534] hover:text-white transition duration-300">
            Post a photo/video
          </button>
          </Link>
        </div>
      </section>

      {/* About the Couple Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8  text-green-900">
            Our Invitation
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="animate__animated animate__fadeInLeft">
              <h3 className="text-3xl font-extrabold text-gray-800 mb-6">Dear Family and Friends,</h3>
              <p className="text-lg text-gray-700 leading-8">
                With joyful hearts and a lifetime of dreams ahead,
                <span className="font-semibold">Albert</span> and <span className="font-semibold">Nidhi</span> warmly invite you to join them as they celebrate their union in love and commitment.
              </p>
              <p className="text-lg text-gray-700 leading-8 mt-4">
                Come share in the beauty of this special day as we exchange vows, create lasting memories, and begin our journey as one. Your presence would mean the world to us as we celebrate love, laughter, and togetherness.
              </p>
              <p className="text-lg text-gray-700 leading-8 mt-4 font-medium">
                With love,
                <br />
                <span className="font-semibold">Albert & Nidhi</span>
              </p>
            </div>

            {/* Image Section */}
            <div className="animate__animated animate__fadeInRight flex justify-center">
              <img
                src={img1}
                alt="Albert and Nidhi"
                className="w-full max-w-sm rounded-lg shadow-md"
              />
            </div>
          </div>

        </div>
      </section>

     
    </div>
  );
}

export default Home;
