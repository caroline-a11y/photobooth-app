import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import '../styles/gallery.css';

const GalleryPage = () => {
  const { data: session, status } = useSession(); // Get session to verify if the user is logged in
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  useEffect(() => {
    console.log("Session data:", session);
    console.log("Session status:", status);
  }, [session, status]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);

    const response = await fetch('/api/gallery/upload', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    setUploadStatus(result.message);
    setSelectedFile(null);
  };

  if (status === "loading") {
    return <div>Loading...</div>; // Show loading state while the session is being fetched
  }

  if (!session) {
    return <div>You must be signed in to upload images.</div>; // Message for users not signed in
  }

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>
      <p className="gallery-description">Here you can see a collection of our photobooth experiences!</p>
      
      {/* Conditionally render the upload button if the user is the owner */}
      {session.user.email === 'malckieboothke@gmail.com' && (
        <div>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload</button>
          {uploadStatus && <p>{uploadStatus}</p>}
        </div>
      )}
      
      <div className="gallery-images">
        {/* Existing images */}
        <img src="/images/photo1.jpg" alt="Gallery Photo 1" className="gallery-image" />
        <img src="/images/photo2.jpg" alt="Gallery Photo 2" className="gallery-image" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default GalleryPage;
