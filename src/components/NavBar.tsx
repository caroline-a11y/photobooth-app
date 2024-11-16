import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/logo.jpg'; // Update the path to your logo if necessary

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold flex items-center">
          {/* Using Next.js Image component for optimized image */}
          <Image
            src={logo} // Using the imported logo
            alt="Photobooth Logo"
            width={40} // Set the desired width
            height={40} // Set the desired height
            className="mr-2" // Add margin if needed
          />
          Malckie Photobooth
        </div>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-white hover:text-gray-400">Home</Link></li>
          <li><Link href="/about" className="text-white hover:text-gray-400">About</Link></li>
          <li><Link href="/bookings" className="text-white hover:text-gray-400">Bookings</Link></li>
          <li><Link href="/gallery" className="text-white hover:text-gray-400">Gallery</Link></li>
          <li><Link href="/contact" className="text-white hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
