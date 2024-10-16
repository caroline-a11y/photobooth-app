// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Email({
      server: {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: 'malckieboothke@gmail.com', // Your email user
          pass: 'hxfszyrkjcegmyyc', // Your email password or app password
        },
      },
      from: 'malckieboothke@gmail.com', // Your sender email address
    }),
  ],
  pages: {
    signIn: '/auth/signin', // Custom sign-in page if needed
  },
  session: {
    jwt: true, // Use JSON Web Tokens for sessions
  },
  callbacks: {
    async session(session, user) {
      session.user.id = user.id; // Add user ID to the session
      return session;
    },
  },
});
