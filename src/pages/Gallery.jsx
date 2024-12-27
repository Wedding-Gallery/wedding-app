import React, { useState, useEffect } from "react";
import { FaShareAlt, FaEdit, FaTrash } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import {
  apiGetGallery,
  apiGetSingleGallery,
  apiUpdateGallery,
  apiDelGallery,
} from "../services/gallery";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalItem, setModalItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedMessage, setUpdatedMessage] = useState("");
  const [updatedName, setUpdatedName] = useState("");

  const itemsPerPage = 4;

  // Fetch Gallery Items
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await apiGetGallery();
        setGalleryItems(Array.isArray(response.data.gallery) ? response.data.gallery : []);
      } catch (err) {
        setError("Failed to load gallery items.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
  const currentItems = galleryItems.slice(
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

  // Fetch Single Gallery Item for Modal
  const handleViewDetails = async (id) => {
    try {
      const response = await apiGetSingleGallery(id);
      setModalItem(response.data);
    } catch (err) {
      Swal.fire("Error", "Failed to fetch gallery item details.", "error");
      console.error(err);
    }
  };

  // Update Gallery Item
  const handleUpdateGallery = async () => {
    try {
      await apiUpdateGallery(modalItem.id, {
        message: updatedMessage,
        name: updatedName,
      });
      setGalleryItems((prev) =>
        prev.map((item) =>
          item.id === modalItem.id
            ? { ...item, message: updatedMessage, name: updatedName }
            : item
        )
      );
      Swal.fire("Success", "Gallery item updated successfully!", "success");
      setModalItem(null);
      setIsEditing(false);
    } catch (err) {
      Swal.fire("Error", "Failed to update gallery item.", "error");
      console.error(err);
    }
  };

  // Delete Gallery Item
  const handleDeleteGallery = async (id) => {
    try {
      await apiDelGallery(id);
      setGalleryItems((prev) => prev.filter((item) => item.id !== id));
      Swal.fire("Success", "Gallery item deleted successfully!", "success");
    } catch (err) {
      Swal.fire("Error", "Failed to delete gallery item.", "error");
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-[#167D56] text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((photo) => (
            <div
              key={photo.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={photo.image}
                alt={photo.message}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{photo.name || "Anonymous"}</h3>
                <p className="text-gray-500 text-sm">{photo.createdAt}</p>
                <p className="text-gray-700 mt-2 text-sm">{photo.message}</p>
                <div className="flex justify-end mt-4 space-x-3">
                  <button
                  className="text-[#C1FF72] hover:text-[#167D56]"
                    onClick={() => handleViewDetails(photo.id)}
                  >
                    <FaShareAlt className="text-xl" />
                  </button>
                  <button
                    className="text-[#C1FF72] hover:text-[#167D56]"
                    onClick={() => {
                      setModalItem(photo);
                      setIsEditing(true);
                      setUpdatedMessage(photo.message);
                      setUpdatedName(photo.name);
                    }}
                  >
                    <FaEdit className="text-xl" />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => handleDeleteGallery(photo.id)}
                  >
                    <FaTrash className="text-xl" />
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
                : "bg-yellow-500 text-white hover:bg-yellow-600"
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
                : "bg-yellow-500 text-white hover:bg-yellow-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-bold mb-4">
              {isEditing ? "Edit Gallery Item" : "Gallery Item Details"}
            </h2>
            <img
              src={modalItem.image}
              alt={modalItem.message}
              className="w-full h-48 object-cover mb-4"
            />
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                  placeholder="Enter name"
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
                <textarea
                  value={updatedMessage}
                  onChange={(e) => setUpdatedMessage(e.target.value)}
                  placeholder="Enter message"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </>
            ) : (
              <>
                <h3 className="text-lg font-bold">{modalItem.name}</h3>
                <p>{modalItem.message}</p>
              </>
            )}
            <div className="flex justify-end space-x-3 mt-4">
              {isEditing ? (
                <button
                  onClick={handleUpdateGallery}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setModalItem(null)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
