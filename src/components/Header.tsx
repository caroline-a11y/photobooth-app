import Image from 'next/image'; // Import Image component from next/image

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white shadow-md p-4">
      <div className="flex items-center">
        {/* Replace <img> with <Image /> */}
        <Image 
          src="/images/logo.jpg"  // Image path
          alt="Photobooth App Logo"  // Alt text for accessibility
          width={48}  // Set width (matches previous w-12 which is 48px)
          height={48} // Set height (matches previous h-12 which is 48px)
          className="mr-2" // Margin right to space out from the title
        />
        <h1 className="text-2xl font-bold text-gray-800">Photobooth App</h1>
      </div>
    </header>
  );
};

export default Header;

  