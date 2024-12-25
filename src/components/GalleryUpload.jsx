import React, { useState } from 'react';
import Navbar from './Navbar';

const GalleryUploadSection = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [success, setSuccess] = useState(false);
  const [filePreview, setFilePreview] = useState('');

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

  const handleUpload = () => {
    if (file && description) {
      // In a real-world scenario, here you would handle the file upload logic to the server
      setSuccess(true);
      setFile(null);
      setDescription('');
      setFilePreview('');
    } else {
      alert('Please select a file and add a description.');
    }
  };

  return (
    <div>
        <Navbar/>
        <section className="bg-white py-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Post to the Couple's Gallery</h2>
      
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
            {file.type.startsWith('image') ? (
              <img src={filePreview} alt="Preview" className="max-w-full h-auto rounded-md" />
            ) : file.type.startsWith('video') ? (
              <video controls className="max-w-full h-auto rounded-md">
                <source src={filePreview} type={file.type} />
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
          className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600"
        >
          Upload to Gallery
        </button>

        {/* Success Message */}
        {success && (
          <p className="mt-4 text-green-500">Your media has been successfully uploaded! 🎉</p>
        )}
      </div>
    </section>
    </div>
  );
};

export default GalleryUploadSection;
