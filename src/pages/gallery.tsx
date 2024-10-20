import React, { useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import '../styles/gallery.css';

const GalleryPage = () => {
  const { data: session, status } = useSession();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false); // Track upload status

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true); // Start loading state

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('/api/gallery/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setUploadStatus('Upload successful!');
        // Optionally refresh images after upload
      } else {
        setUploadStatus(result.message || 'Upload failed.');
      }
    } catch (error) {
      setUploadStatus('An error occurred during upload.');
    } finally {
      setIsUploading(false); // Stop loading state
      setSelectedFile(null);
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>
      <p className="gallery-description">Here you can see a collection of our photobooth experiences!</p>
      
      <div className="gallery-images">
        {/* Placeholder for existing images */}
        <img src="/images/photo1.jpg" alt="Gallery Photo 1" className="gallery-image" />
        <img src="/images/photo2.jpg" alt="Gallery Photo 2" className="gallery-image" />
        {/* Add logic to dynamically render more images if needed */}
      </div>

      {/* Only the owner can see the upload section */}
      {session?.user?.email === 'malckieboothke@gmail.com' ? (
        <div>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload} disabled={isUploading}>
            {isUploading ? 'Uploading...' : 'Upload'}
          </button>
          {uploadStatus && <p>{uploadStatus}</p>}
        </div>
      ) : (
        session === null && (
          <button onClick={() => signIn()}>Owner Sign In</button>
        )
      )}
    </div>
  );
};

export default GalleryPage;
