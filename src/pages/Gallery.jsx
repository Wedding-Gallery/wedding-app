import React from "react";

function Gallery() {
  const images = ["img1.jpeg", "img1.jpeg", "img1.jpeg"]; // Replace with actual paths

  return (
    <section className="bg-green py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gold">Memories</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Memory ${index + 1}`}
            className="rounded-lg shadow-lg"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
