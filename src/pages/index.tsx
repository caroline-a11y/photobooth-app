// pages/index.tsx
// pages/index.tsx
import React from 'react';
import Header from '../components/Header'; // Corrected path
// Adjust based on your file structure
import Footer from '../components/Footer'; // Optional, if you have a footer

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <Header />

      {/* Navigation Section */}
      <nav className="mb-6">
        <ul className="flex space-x-6">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Bookings</li>
          <li className="hover:text-blue-500 cursor-pointer">Gallery</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Bookings Section */}
      <h2 className="text-3xl font-bold mb-4">Bookings</h2>
      <p className="mb-4">Book your photobooth experience with us.</p>

      <form className="space-y-4">
        <div>
          <label className="block mb-1">Name:</label>
          <input type="text" className="border border-gray-300 p-2 rounded w-full" />
        </div>
        <div>
          <label className="block mb-1">Date:</label>
          <input type="date" className="border border-gray-300 p-2 rounded w-full" />
        </div>
        <div>
          <label className="block mb-1">Time:</label>
          <input type="time" className="border border-gray-300 p-2 rounded w-full" />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Confirm Booking
        </button>
      </form>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
