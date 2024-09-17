// pages/_app.tsx
import '../styles/globals.css'; // Import your global CSS file
import NavBar from '@/components/NavBar'; // Adjust path if needed
import Footer from '@/components/Footer'; // Adjust path if needed

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar /> {/* Include the navigation bar */}
      <Component {...pageProps} /> {/* Render the page component */}
      <Footer /> {/* Include the footer */}
    </>
  );
}

export default MyApp;

