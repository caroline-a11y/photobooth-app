/// pages/_app.tsx
import '../styles/globals.css'; // Include Tailwind CSS styles
import type { AppProps } from 'next/app';
import Layout from '../components/Layout'; // Adjust the path if necessary

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;


