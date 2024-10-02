import React from 'react';
import Footer from './Footer';
import Link from 'next/link'; // Use Next.js Link for navigation
import '../styles/globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="bg-yellow-600">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/images/logo.png" alt=" Logo" className="h-12 w-12 object-contain" />
            <h1 className="text-xl font-bold text-white">Malckie Photobooth</h1>
          </div>
          {/* Navigation Links */}
          <nav className="space-x-6">
            <Link href="/about">
              <span className="text-white hover:text-gray-300 cursor-pointer">About</span>
            </Link>
            <Link href="/bookings">
              <span className="text-white hover:text-gray-300 cursor-pointer">Bookings</span>
            </Link>
            <Link href="/gallery">
              <span className="text-white hover:text-gray-300 cursor-pointer">Gallery</span>
            </Link>
            <Link href="/contact">
              <span className="text-white hover:text-gray-300 cursor-pointer">Contact</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-0 bg-gray-100"> {/* Remove padding here */}
        {children} {/* This renders the content of the pages */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
