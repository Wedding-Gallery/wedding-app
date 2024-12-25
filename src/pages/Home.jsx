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

      {/* Venue Section */}
      <section id="venue" className="py-16 px-6 bg-gray-200 text-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold  text-green-900 text-center mb-8">Venue & Location</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Church Wedding Venue */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Church Wedding</h3>
              <p className="text-lg mb-4">
                Holy Family Catholic Church, Mataheko, Accra, Ghana
              </p>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <iframe
                  title="Church Wedding Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31729.255936247303!2d-0.23337789726683994!3d5.560621592799362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a771b3b552d%3A0x4ddc3792a62bb4cb!2sHoly%20Family%20Catholic%20Church%20Mataheko!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="mt-4">
                <a
                  href="https://m.bolt.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline mr-4"
                >
                  Get a Bolt Ride
                </a>
                <a
                  href="https://m.uber.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline"
                >
                  Get an Uber Ride
                </a>
              </div>
            </div>

            {/* Reception Venue */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Reception</h3>
              <p className="text-lg mb-4">Agnes Appiah's Residence, Accra, Ghana</p>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <iframe
                  title="Reception Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31729.255936247303!2d-0.23000012345678!3d5.56345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x123456789abcdef%3A0xabcdefabcdef1234!2sAgnes%20Appiah's%20Residence!5e0!3m2!1sen!2sgh!4v1700000000001!5m2!1sen!2sgh"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="mt-4">
                <a
                  href="https://m.bolt.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline mr-4"
                >
                  Get a Bolt Ride
                </a>
                <a
                  href="https://m.uber.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline"
                >
                  Get an Uber Ride
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
