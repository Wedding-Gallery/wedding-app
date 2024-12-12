import React from "react";

function About() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gold">Meet the Couple</h2>
      <section id="about" className="py-16 px-6 bg-white text-green">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Join us as we celebrate the union of two hearts. Learn more about
            Albert and Nidhi's journey and the exciting moments leading to their
            big day.
          </p>
        </div>
      </section>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src="path_to_groom_image.jpg"
            alt="Groom"
            className="rounded-lg shadow-lg mx-auto"
          />
          <h3 className="text-xl font-bold text-green mt-4">Albert</h3>
          <p className="text-gray-700">Brief description about Albert.</p>
        </div>
        <div>
          <img
            src="path_to_bride_image.jpg"
            alt="Bride"
            className="rounded-lg shadow-lg mx-auto"
          />
          <h3 className="text-xl font-bold text-green mt-4">Nidhi</h3>
          <p className="text-gray-700">Brief description about Nidhi.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
