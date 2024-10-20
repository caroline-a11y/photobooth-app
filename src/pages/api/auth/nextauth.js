import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import EmailProvider from 'next-auth/providers/email';

export default NextAuth({
  providers: [
  EmailProvider({
      server: {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: 'malckieboothke@gmail.com', // Store your email in environment variables
          pass: 'hxfszyrkjcegmyyc',  // Store your App Password in environment variables
        },
      },
      from: process.env.EMAIL_FROM || 'malckieboothke@gmail.com', // Use environment variable with fallback
    }),
  ],
  pages: {
    signIn: '/auth/signin', // Custom sign-in page
    error: '/auth/error',    // Custom error page for authentication errors
  },
});
