import React, { useState } from "react";

export default function PhotoUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    alert(file ? `Uploaded: ${file.name}` : "No file selected");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Upload Your Circuit Photo</h1>
      <p className="text-gray-600 mb-6">Upload images for reference or demonstration.</p>

      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button onClick={handleUpload} className="btn btn-primary">
        Upload
      </button>

      {file && <p className="mt-3 text-gray-700">Selected File: {file.name}</p>}
    </div>
  );
}
