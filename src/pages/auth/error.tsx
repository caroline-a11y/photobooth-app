// src/pages/auth/error.tsx
import { useRouter } from 'next/router';
import queryString from 'query-string';
import { useEffect, useState } from 'react';

const AuthError = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('An unknown error occurred. Please try again.');

  useEffect(() => {
    const parsedQuery = queryString.parse(router.asPath.split(/\?/)[1]);
    const error = parsedQuery.error;

    if (error) {
      setErrorMessage(decodeURIComponent(error as string));
    }
  }, [router.asPath]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Authentication Error</h1>
      <p className="mt-4">{errorMessage}</p>
      <button onClick={() => router.push('/auth/signin')} className="mt-6 p-2 bg-blue-500 text-white rounded">
        Go Back to Sign In
      </button>
    </div>
  );
};

export default AuthError;
