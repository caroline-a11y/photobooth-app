// src/pages/auth/error.tsx
import { useRouter } from 'next/router';
import queryString from 'query-string';
import { useEffect } from 'react';

const AuthError = () => {
  const router = useRouter();

  // Log the router object to see its structure
  useEffect(() => {
    console.log("Router object:", router);
    console.log("Error query param:", router.query.error); // Log the error query param
  }, [router]);

  // Function to parse query parameters
  const authError = () => {
    return {
      query: { ...queryString.parse(router.asPath.split(/\?/)[1]) },
    };
  };

  const updatedRouter = authError();
  const { error } = updatedRouter.query;

  let errorMessage = 'An unknown error occurred. Please try again.';

  if (error) {
    errorMessage = decodeURIComponent(error as string);
  }

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