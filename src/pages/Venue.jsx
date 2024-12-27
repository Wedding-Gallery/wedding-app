import React from "react";
import Navbar from "../components/Navbar";

const Venue = () => {
  return (
    <div>
      <Navbar />
      {/* Venue Section */}
      <section id="venue" className="py-16 px-6 bg-gray-200 text-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-green-900 text-center mb-8">
            Venue & Location
          </h2>

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
                  href="https://maps.app.goo.gl/XpoPrfiHvyxbbW6L8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline mr-4"
                >
                  Get a Bolt Ride
                </a>
                <a
                  href="https://maps.app.goo.gl/XpoPrfiHvyxbbW6L8"
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
              <p className="text-lg mb-4">
                Agnes Appiah's Residence, Accra, Ghana
              </p>
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
                  href="https://maps.app.goo.gl/4uhkQAbTrfHHYre86"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline mr-4"
                >
                  Get a Bolt Ride
                </a>
                <a
                  href="https://maps.app.goo.gl/4uhkQAbTrfHHYre86"
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
};

export default Venue;
