import React, { useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";

const Gallery = () => {
  // Mock Data
  const photos = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      postedBy: "John Doe",
      date: "2024-12-20",
      description: "A beautiful moment captured during the ceremony.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      postedBy: "Jane Smith",
      date: "2024-12-21",
      description: "Amazing setup at the reception!",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      postedBy: "Albert Johnson",
      date: "2024-12-22",
      description: "A wonderful dance performance.",
    },
    // Add more items as needed
  ];

  const itemsPerPage = 4; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination Logic
  const totalPages = Math.ceil(photos.length / itemsPerPage);
  const currentItems = photos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
   <div>
    <Navbar/>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((photo) => (
          <div
            key={photo.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={photo.image}
              alt={photo.description}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{photo.postedBy}</h3>
              <p className="text-gray-500 text-sm">{photo.date}</p>
              <p className="text-gray-700 mt-2 text-sm">{photo.description}</p>
              <div className="flex justify-end mt-4">
                <button className="text-gray-500 hover:text-gray-700">
                  <FaShareAlt className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
   </div> 
  );
};

export default Gallery;
