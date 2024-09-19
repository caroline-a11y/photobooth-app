import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const Footer = () => {
  return (
    <footer className="bg-purple-400 py-8">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-white mb-4">&copy; 2024 Malckie Photobooth. All rights reserved.</p>
        
        {/* Quick Links */}
        <div className="flex space-x-4 mb-4">
          <Link href="/about" className="text-white hover:text-gray-200">
            About Us
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
          <Link href="/gallery" className="text-white hover:text-gray-200">
            Gallery
          </Link>
          <Link href="/bookings" className="text-white hover:text-gray-200">
            Bookings
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            Twitter
          </a>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col items-center">
          <h2 className="text-white mb-2">Subscribe to Our Newsletter</h2>
          <input type="email" placeholder="Enter your email" className="p-2 rounded mb-2" />
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400 transition">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
