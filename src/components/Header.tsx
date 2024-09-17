// src/components/Header.tsx
const Header = () => {
    return (
      <header className="flex items-center justify-between bg-white shadow-md p-4">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Photobooth Logo" className="w-12 h-12 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Photobooth App</h1>
        </div>
      </header>
    );
  };
  
  export default Header;
  