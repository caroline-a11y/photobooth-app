import React from 'react';
import Link from 'next/link';
import '../styles/about.css';

const About: React.FC = () => {
  return (
    <div className="about-background flex flex-col items-start justify-center p-8">
      <h1 className="text-yellow-500 text-7xl font-bold"> Get to learn About Us</h1>
      <div className="about-content flex mt-7"> {/* Flex container for text and images */}
        <div className="about-text flex-1 pr-7"> {/* Flex-1 to take up remaining space */}
          <p className="text-yellow-500 mt-7 text-xl">
            Malckie booth is more than just a photo booth
             rental service; we're a team of passionate individuals
              dedicated to making your special events unforgettable.
               With a love for capturing the joy and excitement of every
                occasion, we strive to provide top-notch photo booth experiences
                 that leave a lasting impression.
          </p>
          <p className="text-yellow-500 mt-7 text-xl">
            Let’s get ready to book or take some good photos with Malckie and create good memories. Just click the button below. Enjoy!
          </p>
          <div className="about-images flex justify-between mt-4"> {/* Use flex to arrange images in a row */}
            <img src="/images/wedding.png" alt="Wedding Event" className="w-24 h-24 object-cover" />
            <img src="/images/party.jpeg" alt="Party Event" className="w-24 h-24 object-cover" />
            <img src="/images/event.jpeg" alt="Event Photo Booth" className="w-24 h-24 object-cover" />
            <img src="/images/cinema.png" alt="Cinema Photo Booth" className="w-24 h-24 object-cover" />
          </div>

          
          {/* Booking Button */}
          <Link href="/bookings">
            <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400 transition">
              Book Now
            </button>
          </Link>
        </div>
        
        {/* Images Container */}
        <div className="about-images flex flex-col space-y-4"> {/* Stack images vertically */}
        <img src="/images/photo one.jpg" alt="About Malckie Photobooth" className="about-image" />
        <img src="/images/photo two.jpg" alt="About Malckie Photobooth" className="about-image" />
        </div>
      </div>
    </div>
  );
}

export default About;
