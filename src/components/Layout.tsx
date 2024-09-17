import React from 'react';
import NavBar from './NavBar'; // Adjust the path as necessary
import Footer from './Footer';
import '../styles/globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        {children} {/* This will render the content of each page */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
