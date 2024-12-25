import React from "react";
import Navbar from "./Navbar";
import prog2 from "../assets/images/prog2.png"
import prog3 from "../assets/images/prog3.png"

function About() {
  return (
    <div>
      <Navbar />
      {/* Meet the Couple Section */}
      <section className=" py-16 px-6 text-center bg-gray-300">
        <h2 className="text-3xl font-bold text-green-900">Meet the Couple</h2>
        <section id="about" className="py-16 px-6 bg-white text-green">
        <div className="container mx-auto text-center">
  <h2 className="text-3xl font-bold mb-4 text-green-900">Our Story</h2>
  <p className="text-lg max-w-2xl mx-auto">
    Our journey began with an unexpected meeting that quickly turned into something magical.  
    From the very first conversation, we felt an unexplainable connection—a bond that grew stronger with every laugh, adventure, and heartfelt moment we shared.
  </p>
  <p className="text-lg max-w-2xl mx-auto mt-4">
    Through life’s ups and downs, we’ve been each other’s greatest supporters, creating memories that will last a lifetime.  
    Now, as we begin this next chapter together, we are filled with gratitude and excitement for what’s ahead.
  </p>
  <p className="text-lg max-w-2xl mx-auto mt-4">
    Thank you for being part of our story and celebrating this special day with us.
  </p>
  <p className="text-lg max-w-2xl mx-auto mt-4 font-semibold">
    With love,  
    <br />
    Albert & Nidhi
  </p>
</div>

        </section>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="path_to_groom_image.jpg"
              alt="the couple"
              className="rounded-lg shadow-lg mx-auto"
            />
            <h3 className="text-xl font-bold text-green mt-4 text-green-800">
              The Couple
            </h3>
          </div>
         
        </div>
      </section>

      {/* Order of Service Section */}
      <section id="order-of-service" className="py-16 px-6 bg-gray-300">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
            Order of Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Program Outline */}
            <div className="text-center">
              <img
                src={prog3}
                alt="Program Outline"
                className="rounded-lg shadow-lg mx-auto"
              />
              <h3 className="text-xl font-bold mt-4 text-green-800">
                Program Outline
              </h3>
              <p className="text-gray-700">
                Detailed schedule of the day's events.
              </p>
            </div>

            {/* Wedding Officials */}
            <div className="text-center">
              <img
                src={prog2}
                alt="Wedding Officials"
                className="rounded-lg shadow-lg mx-auto"
              />
              <h3 className="text-xl font-bold mt-4 text-green-800">
                Wedding Officials
              </h3>
              <p className="text-gray-700">
                Meet the officiants and key individuals for the ceremony.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
