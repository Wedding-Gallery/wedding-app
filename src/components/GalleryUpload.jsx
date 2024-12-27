import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import { apiAddGallery } from "../services/gallery";

const GalleryUploadSection = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [filePreview, setFilePreview] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const fileURL = URL.createObjectURL(selectedFile);
      setFilePreview(fileURL); // Show preview for image or video
    }
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUpload = async () => {
    if (!file || !description) {
      Swal.fire("Error", "Please select a file and add a description.", "error");
      return;
    }

    // Create the payload explicitly as in StaffRegister
    const payload = {
      message: description,
      image: file,
      
    };

    try {
      const formData = new FormData();
      Object.keys(payload).forEach((key) => {
        formData.append(key, payload[key]);
      });

      const response = await apiAddGallery(formData);

      if (response.status === 201) {
        Swal.fire("Success", "Your media has been successfully uploaded! 🎉", "success").then(() => {
          navigate("/gallery"); // Navigate to the gallery page after success
        });

        setFile(null);
        setDescription("");
        setFilePreview("");
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      Swal.fire(
        "Error",
        error.response?.data?.message || "An error occurred while uploading the media.",
        "error"
      );
      console.error("Upload Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="bg-white py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Post to the Couple's Gallery
        </h2>

        <div className="flex flex-col items-center">
          {/* File Upload Input */}
          <div className="mb-4 w-full flex justify-center">
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="p-2 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* File Preview */}
          {filePreview && (
            <div className="mb-4 w-full flex justify-center">
              {file?.type?.startsWith("image") ? (
                <img src={filePreview} alt="Preview" className="max-w-full h-auto rounded-md" />
              ) : file?.type?.startsWith("video") ? (
                <video controls className="max-w-full h-auto rounded-md">
                  <source src={filePreview} type={file?.type} />
                </video>
              ) : null}
            </div>
          )}

          {/* Description Input */}
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Add a description for your post..."
            className="w-full p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            rows="4"
          />

          {/* Submit Button */}
          <button
            onClick={handleUpload}
            className="px-6 py-2 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-900"
          >
            Upload to Gallery
          </button>
        </div>
      </section>
    </div>
  );
};

export default GalleryUploadSection;
