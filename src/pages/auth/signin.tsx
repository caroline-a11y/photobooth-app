import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const SignInPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (status === 'authenticated') {
      if (session?.user?.email === 'malckieboothke@gmail.com') {
        router.push('/gallery');
      } else {
        router.push('/auth/error?error=Not%20Authorized');
      }
    }
  }, [session, status, router]);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn('email', {
      email,
      redirect: false,
    });

    if (result?.error) {
      setErrorMessage(result.error);
    } else {
      router.push('/gallery');
    }
  };

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin border-t-4 border-blue-500 rounded-full w-16 h-16 border-solid" />
      </div>
    );
  }

  return (
    <div className="signin-container">
      <h1 className="text-lg font-bold">Sign in</h1>
      <p>Only the owner can sign in to upload images.</p>
      {errorMessage && (
        <p className="text-red-500 mt-2">{errorMessage}</p>
      )}
      <form onSubmit={handleSignIn}>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        />
        <button type="submit" className="mt-3 p-2 bg-blue-500 text-white rounded-md">Sign in with Email</button>
      </form>
    </div>
  );
};

export default SignInPage;
