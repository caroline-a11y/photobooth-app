// src/components/Navigation.tsx
import React from 'react';

const Navigation = () => {
  return (
    <nav className="mb-6">
  <ul className="flex space-x-6">
    <li className="hover:text-blue-500 cursor-pointer">
      <a href="/">About</a>
    </li>
    <li className="hover:text-blue-500 cursor-pointer">
      <a href="/bookings">Bookings</a>
    </li>
    <li className="hover:text-blue-500 cursor-pointer">
      <a href="/gallery">Gallery</a>
    </li>
    <li className="hover:text-blue-500 cursor-pointer">
      <a href="/contact">Contact</a>
    </li>
  </ul>
</nav>

  );
};

export default Navigation;
