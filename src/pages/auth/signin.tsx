// pages/auth/signin.tsx
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SignInPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // If the user is already signed in and is the owner, redirect to the gallery page
    if (status === 'authenticated') {
      if (session?.user?.email === 'malckieboothke@gmail.com') {
        router.push('/gallery');
      } else {
        // Handle non-owner sign-in, you can redirect or show an error
        router.push('/auth/error?error=Not%20Authorized');
      }
    }
  }, [session, status, router]);

  const handleSignIn = async () => {
    const result = await signIn('email', {
      redirect: false, // Don't automatically redirect
    });

    if (result?.error) {
      // Redirect to the error page if there's an error
      router.push(`/auth/error?error=${encodeURIComponent(result.error)}`);
    } else {
      // Optionally handle successful sign-in
      router.push('/gallery'); // Redirect to gallery or wherever you want
    }
  };

  // Add loading state while waiting for authentication
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="signin-container">
      <h1>Sign in</h1>
      <p>Only the owner can sign in to upload images.</p>
      <button onClick={handleSignIn}>Sign in with Email</button>
    </div>
  );
};

export default SignInPage;
