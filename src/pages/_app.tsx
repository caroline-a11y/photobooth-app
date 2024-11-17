// pages/_app.tsx
import { useRouter } from 'next/router';  // Import useRouter to get the current route
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout'; // Adjust the path if necessary
import '../styles/globals.css'; // Include Tailwind CSS styles

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();

  // Define private routes (add other routes that require authentication)
  const privateRoutes = ['/upload', '/dashboard'];

  // Check if the current route is private and user is not logged in
  if (privateRoutes.includes(router.pathname) && !session) {
    // Redirect to login page if trying to access a private route while not logged in
    router.push('/signin');
    return null;  // Don't render the page until redirection is complete
  }

  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;





