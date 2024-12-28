import React from "react";
import Navbar from "../components/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { FaChurch } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

const Venue = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      {/* Venue Section */}
      <section id="venue" className="py-16 px-6 text-gray-800">
        <div className="container mx-auto">
          <h2 className="flex items-center justify-center gap-2 text-3xl font-bold text-green-900 mb-8">
            <FaLocationDot size={30} /> Venue/Location
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Church Wedding Venue */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <FaChurch size={25} className="text-green-700" />
                <h3 className="text-xl font-semibold">Church Wedding</h3>
              </div>
              <p className="text-lg mb-4">
                Holy Family Catholic Church, Mataheko, Accra, Ghana
              </p>
              <div className="mt-4">
                <a
                  href="https://maps.app.goo.gl/XpoPrfiHvyxbbW6L8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline"
                >
                  View Location on Google Maps
                </a>
              </div>
            </div>

            {/* Reception Venue */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <GiPartyPopper size={25} className="text-green-700" />
                <h3 className="text-xl font-semibold">Reception</h3>
              </div>
              <p className="text-lg mb-4">
                Agnes Appiah's Residence, Accra, Ghana
              </p>
              <div className="mt-4">
                <a
                  href="https://maps.app.goo.gl/4uhkQAbTrfHHYre86"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline"
                >
                  View Location on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Venue;
