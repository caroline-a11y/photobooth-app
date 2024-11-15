import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from 'next/image';

const GalleryPage = () => {
  return (
    <div className="bg-black text-[#facc15] min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <p className="text-yellow-500 mt-7 text-xl">
            here are some o the photo ideas you can do 
          </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gallery-images">
        <Image
          src="/images/photo 5.jpg"
          alt="Gallery Photo 5"
          width={500} // Provide appropriate width
          height={500} // Provide appropriate height
          className="w-full h-auto object-cover rounded-lg"
        />
        <Image
          src="/images/photo 6.jpg"
          alt="Gallery Photo 6"
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-lg"
        />
        <Image
          src="/images/photo 7.jpg"
          alt="Gallery Photo 7"
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-lg"
        />
        <Image
          src="/images/photo two.jpg"
          alt="Gallery Photo Two"
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-lg"
        />
        <Image
          src="/images/photo 7.jpg"
          alt="Gallery Photo 7"
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      <p className="text-yellow-500 mt-7 text-xl">
        To view some of our work, click on our social handles below
      </p>

      {/* Instagram handle link with icon */}
      <div className="mt-4 text-center">
        <a
          href="https://www.instagram.com/malckieboothke/profilecard/?igsh=MWNsbjV5ZjFhZXQ2cQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#facc15] flex justify-center items-center gap-2 hover:text-yellow-400"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          Follow us on Instagram: @malckieboothke
        </a>
      </div>
    </div>
  );
};

export default GalleryPage;






