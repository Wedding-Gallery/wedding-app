import React, { useState } from "react";

const PhotoSharing = () => {
  const [photos, setPhotos] = useState([]);
  const [caption, setCaption] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotos([...photos, { src: reader.result, caption }]);
        setCaption("");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Photo Sharing</h2>
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="mb-2"
        />
        <input
          type="text"
          placeholder="Add a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={photo.src}
              alt={`Photo ${index + 1}`}
              className="w-full h-32 object-cover rounded-md"
            />
            <p className="mt-2 text-sm">{photo.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoSharing;
