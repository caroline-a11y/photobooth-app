import Image from 'next/image'; // Import the Image component
import Link from 'next/link'; // Ensure Link is imported for routing
import Footer from './Footer'; // Assuming Footer is imported from the appropriate path

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="bg-yellow-600">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Replace <img> with <Image /> */}
            <Image 
              src="/images/logo.jpg" // Path to your image
              alt="Logo" // Alt text for accessibility
              width={48} // Set width (adjust size as needed)
              height={48} // Set height (adjust size as needed)
              className="object-contain" // Ensures the logo is properly contained
            />
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
      <main className="flex-grow p-0 bg-gray-100"> {/* Removed padding here */} 
        {children} {/* This renders the content of the pages */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
