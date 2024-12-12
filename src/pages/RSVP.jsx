import React from "react";

function RSVP() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gold">RSVP</h2>
      <form className="mt-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="block w-full border rounded-lg px-4 py-2 mb-4"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="block w-full border rounded-lg px-4 py-2 mb-4"
        />
        <textarea
          placeholder="Your Message"
          className="block w-full border rounded-lg px-4 py-2 mb-4"
        ></textarea>
        <button className="bg-gold text-white px-6 py-2 rounded-lg shadow-lg">
          Submit
        </button>
      </form>
    </section>
  );
}

export default RSVP;
