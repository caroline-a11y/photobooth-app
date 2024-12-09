// src/pages/index.tsx
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-yellow-500">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg">
          Welcome to Malckie Photobooth! We specialize in creating unforgettable memories with our photobooth services. Whether it's a wedding, corporate event, or private party, we've got you covered.
        </p>
        <p className="mt-4">
          Our team is dedicated to ensuring every event is a success by providing high-quality photos and a fun experience for all your guests. Book with us today and make your event one to remember!
        </p>

        {/* Logo Image */}
        <div className="mt-8">
          <img
            src="/images/logo.jpg" // Replace with your actual logo path
            alt="Malckie Photobooth Logo"
            className="mx-auto mt-6 max-w-xs" // Styles the image (centered and max width)
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
